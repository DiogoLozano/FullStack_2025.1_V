let canvas1 = document.getElementById("canvas1")
 let ctx1 = canvas1.getContext("2d")
 
 function escrever(){
 ctx1.font = "20px Arial";
 ctx1.fillText("canvas",120,40);
 }
 escrever()
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
 
 
 function Circulos() {

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
      ctx1.beginPath();
      ctx1.arc(150, 150, 100, 15.7, Math.PI * 2);
      ctx1.stroke();
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

let canvas2 = document.getElementById("canvas2")
 let ctx2 = canvas2.getContext("2d")
 
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