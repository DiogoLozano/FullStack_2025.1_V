let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

function quadrado(cor, medidas){
    const [x, y, largura, altura] = medidas
    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
    ctx.closePath();
}
quadrado('blue', [0, 0, 50, 50])
quadrado('red', [250,0,50,50])
quadrado('aqua', [0, 125, 25, 50])
quadrado('aqua', [275, 135, 25, 25])
quadrado('yellow', [0, 250, 25, 50])
quadrado('yellow', [25, 275, 25, 25])
quadrado('black', [275, 250, 25, 50])
quadrado('black', [250, 275, 25, 25])

function linha(){

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = "blue"
    ctx.moveTo(0,100);
    ctx.lineTo(100,100);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
