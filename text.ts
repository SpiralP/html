const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "lightgrey";
  ctx.fillStyle = ctx.strokeStyle;

  const text = decodeURIComponent(location.hash.substr(1));
  for (let size = canvas.height; size >= 0; size--) {
    ctx.font = `bold ${size}px "Droid Sans"`;
    console.log(size);
    if (ctx.measureText(text).width <= canvas.width) {
      ctx.fillText(text, 0, size);
      break;
    }
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  draw();
}
window.addEventListener("resize", resizeCanvas);
window.addEventListener("load", resizeCanvas);
window.addEventListener("DOMContentLoaded", resizeCanvas);
resizeCanvas();
