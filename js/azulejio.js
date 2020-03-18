// Initialize canvas
const $canvas = document.getElementById("drawing-canvas");
const drawing = new Drawing($canvas);

// Draw grid
const $gridLines = document.getElementById("grid-lines");
$gridLines.style.transform = "translateX(-2px) translateY(-2px)";
$gridLines.style.width = `${drawing.offsetWidth}px`;
$gridLines.style.height = `${drawing.offsetHeight}px`;
$gridLines.style.display = "none";
const $diag1 = document.getElementById("diag1");
$diag1.style.width = `${drawing.offsetWidth * 1.4142}px`;
const $diag2 = document.getElementById("diag2");
$diag2.style.width = `${drawing.offsetWidth * 1.4142}px`;
$diag2.style.transform = `translateY(${drawing.offsetHeight}px) translateX(-2px) rotate(-.125turn)`;
const $horiz = document.getElementById("horiz");
$horiz.style.width = `${drawing.offsetWidth}px`;
$horiz.style.transform = `translateY(${drawing.offsetHeight / 2}px)`;
const $vert = document.getElementById("vert");
$vert.style.width = `${drawing.offsetWidth}px`;
$vert.style.transform = `translateX(${drawing.offsetWidth /
  2}px) translateX(1px) rotate(.25turn)`;

// What to do when window is resized/scrolled
const boundingBoxChanged = () => {
  let DOMrect = drawing.canvas.getBoundingClientRect();
  drawing.offsetTop = DOMrect.top;
  drawing.offsetLeft = DOMrect.left;
  drawing.offsetWidth = DOMrect.width;
  drawing.offsetHeight = DOMrect.height;
  $gridLines.style.width = `${drawing.offsetWidth}px`;
  $gridLines.style.height = `${drawing.offsetHeight}px`;
  $diag1.style.width = `${drawing.offsetWidth * 1.4142}px`;
  $diag2.style.width = `${drawing.offsetWidth * 1.4142}px`;
  $diag2.style.transform = `translateY(${drawing.offsetHeight}px) translateX(-2px) rotate(-.125turn)`;
  $horiz.style.width = `${drawing.offsetWidth}px`;
  $horiz.style.transform = `translateY(${drawing.offsetHeight /
    2}px) translateY(-1px)`;
  $vert.style.width = `${drawing.offsetWidth}px`;
  $vert.style.transform = `translateX(${drawing.offsetWidth /
    2}px) translateX(1px) rotate(.25turn)`;
};
window.addEventListener("scroll", boundingBoxChanged);
window.addEventListener("resize", boundingBoxChanged);

// Initialize things
drawing.startMenu();
// Calculate canvas bounding box offsets (and recompute when window resizes/scrolls)
boundingBoxChanged();

// Add listener for color picker
const $brushColor = document.getElementById("brush-color");
$brushColor.addEventListener("change", e => {
  drawing.brushColor = e.target.value;
});

// Add listener for brush size
const $brushSizeValue = document.getElementById("brush-size-value");
const $brushSize = document.getElementById("brush-size");
$brushSize.addEventListener("input", e => {
  drawing.brushSize = e.target.value;
  $brushSizeValue.innerText = e.target.value;
});

// Add listener for toggling grid lines
const $toggleGrid = document.getElementById("toggle-grid");
$toggleGrid.addEventListener("click", e => {
  $gridLines.style.display =
    $gridLines.style.display === "none" ? "block" : "none";
});
