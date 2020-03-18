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
  $render3.innerHTML = `<img src="/img/tile_template_1.png" alt="oh a cool render" width="100%" />`;
  $render3.style.width = "40%";
  $render3.style.backgroundSize = "10%";
  $render3.style.backgroundImage = `url(${img})`;
  $render4.innerHTML = `<img src="/img/tile_template_2.png" alt="oh a cool render" width="100%" />`;
  $render4.style.width = "40%";
  $render4.style.backgroundSize = "10%";
  $render4.style.backgroundImage = `url(${img})`;
};

// TODO: write a method to convert css-styled elements to SVG, embed in canvas, convert to PNG
const cssStyledImageToDataURL = () => {
  // $render3.style = {};
  // $render3.innerHTML = "";
  // const $tempCanvas = document.createElement("canvas");
  // $tempCanvas.width = 1023;
  // $tempCanvas.height = 1525;
  // const context = $tempCanvas.getContext("2d");
  // context.fillStyle = "red";
  // context.fillRect(0, 0, 200, 200);
  // const img = $tempCanvas.toDataURL("image/png");
  // $render3.innerHTML = `<img src="${img}" alt="my azulejo design" width="100%" />`;
};

// Add listener for generating renders
const $renderButton = document.getElementById("render");
$renderButton.addEventListener("click", generateRenders);

// // Add listener for generating renders
// const $expRenderButton = document.getElementById("exp-render");
// $expRenderButton.addEventListener("click", cssStyledImageToDataURL);
