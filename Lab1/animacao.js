const canvas = document.getElementById('animacao');
    const ctx = canvas.getContext('2d');

    const objeto = {
      x: 150,
      y: 150,
      raio: 20,
      cor: 'blue'
    };

    let mouseX = objeto.x;
    let mouseY = objeto.y;

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      // Impede que o centro do objeto ultrapasse os limites do canvas
      mouseX = Math.max(objeto.raio, Math.min(canvas.width - objeto.raio, x));
      mouseY = Math.max(objeto.raio, Math.min(canvas.height - objeto.raio, y));
    });

    function desenhar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Atualiza a posição do objeto
      objeto.x = mouseX;
      objeto.y = mouseY;

      // Desenha o objeto
      ctx.beginPath();
      ctx.arc(objeto.x, objeto.y, objeto.raio, 0, Math.PI * 2);
      ctx.fillStyle = objeto.cor;
      ctx.fill();
      ctx.closePath();

      requestAnimationFrame(desenhar);
    }

    desenhar();