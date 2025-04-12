let canvas1 = document.getElementById("canvas1")
let ctx1 = canvas1.getContext("2d")

function quadrado(cor, medidas){
    const [x, y, largura, altura] = medidas
  ctx1.beginPath();
    ctx1.lineWidth = 2
    ctx1.fillStyle = cor;
    ctx1.fillRect(x, y, largura, altura);
  ctx1.closePath();
}
quadrado('blue', [0, 0, 50, 50])
quadrado('red', [250, 0, 50, 50])
quadrado('aqua', [0, 125, 25, 50])
quadrado('aqua', [275, 138, 25, 25])
quadrado('yellow', [0, 250, 25, 50])
quadrado('yellow', [25, 275, 25, 25])
quadrado('black', [275, 250, 25, 50])
quadrado('black', [250, 275, 25, 25])
quadrado('red', [110, 150, 40, 40])

function linha(cor, start, end){
    const [x, y] = start
    const [w, z] = end
  ctx1.beginPath();
    ctx1.lineWidth = 1;
    ctx1.strokeStyle = cor
    ctx1.moveTo(x, y);
    ctx1.lineTo(w, z);
  ctx1.fill();
    ctx1.stroke();
  ctx1.closePath();
}
linha('blue', [0,0], [150,150])
linha('red', [300, 0], [150, 150])
linha('green', [0, 150], [300, 150])
linha('gray', [150, 150], [150, 300])

function Circulos(cor, x, y, z, w, pi) {
  ctx1.strokeStyle = cor;
  [30, 50, 70].forEach(r => {
    ctx1.beginPath();
    ctx1.arc(x, y, z, w, Math.PI * pi);
    ctx1.stroke();
    });
    
  ctx1.strokeStyle = 'green';
  [30, 50, 70].forEach(r => {
    ctx1.beginPath();
    ctx1.arc(150, 150, 70, 99.8, Math.PI * 2);
    ctx1.stroke();
  });

  ctx1.strokeStyle = 'green';
    [30, 50, 70].forEach(r => {
      ctx1.beginPath();
      ctx1.arc(150, 150, 100, 15.7, Math.PI * 2);
      ctx1.stroke();
  });

    ctx1.strokeStyle = 'green';
    [30, 50, 70].forEach(r => {
      ctx1.beginPath();
      ctx1.arc(150, 300, 60, 99,Math.PI * 2);
      ctx1.stroke();
  });
    ctx1.strokeStyle = 'green';
    [30, 50, 70].forEach(r => {
    ctx.beginPath();
      ctx.arc(150, 150, 100, 15.7, Math.PI * 2);
    ctx.stroke();
  });
    ctx1.strokeStyle = 'green';
    [30, 50, 70].forEach(r => {
      ctx1.beginPath();
      ctx1.arc(150, 150, 70, 3.14, Math.PI * 1.25);
      ctx1.stroke();
    });
    ctx1.strokeStyle = 'green';
    [30, 50, 70].forEach(r => {
      ctx1.beginPath();
      ctx1.arc(150, 300, 90, 0, Math.PI * 1.5);
      ctx1.stroke();
  });
    ctx1.fillStyle = 'cyan';
    ctx1.beginPath();
    ctx1.arc(150, 90, 15, 0, Math.PI * 2);
    ctx1.fill();
    ctx1.stroke();

    ctx1.fillStyle = 'yellow';
    ctx1.beginPath();
    ctx1.arc(90, 210, 15, 0, Math.PI * 2);
    ctx1.fill();
    ctx1.stroke() ;

    ctx1.beginPath();
    ctx1.arc(210, 210, 15, 0, Math.PI * 2);
    ctx1.fill();
    ctx1.stroke();

    ctx1.fillStyle = 'cyan';
    ctx1.beginPath();
    ctx1.arc(150, 300, 30, 0, Math.PI, true); 
    ctx1.fill();
    ctx1.stroke();
  }
  
  Circulos()


