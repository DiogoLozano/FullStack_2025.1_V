let canvas2 = document.getElementById("canvas2")
let ctx2 = canvas1.getContext("2d")

ctx2.fillStyle = 'aquamarine';
ctx2.fillRect(0, 0, 300, 300);


ctx2.fillStyle = 'yellow';
ctx2.beginPath();
ctx2.arc(240, 70, 35, 0, Math.PI * 2);
ctx2.fill();


ctx2.fillStyle = 'gray';
ctx2.fillRect(0, 190, 300, 110);



ctx2.fillStyle = 'saddlebrown';
ctx2.fillRect(115, 130, 70, 60);


ctx2.fillStyle = 'tomato';
ctx2.beginPath();
ctx2.moveTo(110, 130);
ctx2.lineTo(190, 130);
ctx2.lineTo(150, 95);
ctx2.closePath();
ctx2.fill();


ctx2.fillStyle = 'brown';
ctx2.fillRect(140, 160, 20, 30);


ctx2.fillStyle = 'deepskyblue';
ctx2.fillRect(120, 145, 20, 15);
ctx2.fillRect(160, 145, 20, 15);

function desenharArvore(x, y) {
  ctx2.fillStyle = 'sienna';
  ctx2.fillRect(x - 4, y, 8, 50);
  ctx2.fillStyle = 'forestgreen';
  ctx2.beginPath();
  ctx2.arc(x, y, 16, 0, Math.PI * 2);
  ctx2.fill();
}
desenharArvore(50, 160);
desenharArvore(250, 160);