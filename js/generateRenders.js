// Render-generation function and stuff
const $renders = document.getElementById("renders");
const $render1 = document.getElementById("render1");
const $render2 = document.getElementById("render2");
const $render3 = document.getElementById("render3");
const $render4 = document.getElementById("render4");

const generateRenders = () => {
  const img = $canvas.toDataURL("image/png");
  $renders.style.display = "flex";
  $renders.style.justifyContent = "space-evenly";
  $renders.style.flexWrap = "wrap";
  $render1.innerHTML = `<img src="${img}" alt="my azulejo design" width="100%" />`;
  $render1.style.width = "40%";
  $render2.innerHTML = `<img src="${img}" alt="my azulejo design" width="50%" style="margin: 25%; box-shadow: 6px 6px 12px 5px rgba(0,0,0,0.75);"/>`;
  $render2.style.backgroundImage = "url(/img/wood-original.jpg)";
  $render2.style.width = "40%";
  generateFacade(img, "/img/tile_template_1.png", $render3);
  generateFacade(img, "/img/tile_template_2.png", $render4);
};

const generateFacade = (imgURI, facadeSource, element) => {
  // Clear the div where the new image will appear
  element.style = {};
  element.innerHTML = ``;

  // Generate canvas element
  const $tempCanvas = document.createElement("canvas");
  $tempCanvas.width = 666;
  $tempCanvas.height = 1000;
  const context = $tempCanvas.getContext("2d");

  // tile the image URI
  const tile = new Image();
  tile.src = imgURI;
  tile.onload = () => {
    for (let x = 0; x < 666; x += 66.67) {
      for (let y = 0; y < 1000; y += 66.67) {
        context.drawImage(tile, x, y, 66.67, 66.67);
      }
    }
    // Load building facade picture
    const facade = new Image();
    facade.src = facadeSource;
    facade.onload = () => {
      context.drawImage(facade, 0, 0);
      console.log("aaaa");
      // Get canvas URI
      const png = $tempCanvas.toDataURL("image/png");

      element.innerHTML = `<img src="${png}" width="100%" />`;
      element.style.width = "40%";
    };
  };
};

// Add listener for generating renders
const $renderButton = document.getElementById("render");
$renderButton.addEventListener("click", generateRenders);
