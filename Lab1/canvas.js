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
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = cor
    ctx.moveTo(x, y);
    ctx.lineTo(w, z);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
linha('blue', [0,0], [150,150])
linha('red', [300, 0], [150, 150])
linha('green', [0, 150], [300, 150])
linha('gray', [150, 150], [150, 300])

function arc(){
    const []
    ctx.beginPath();
    ctx.arc(medidas * Math.PI);
    ctx.stroke();

}