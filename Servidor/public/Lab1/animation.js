const canvas = document.getElementById('animation');
    const ctx = canvas.getContext('2d');

    const objeto = {
      x: 150,
      y: 150,
      raio: 20,
    };

    let mouseX = objeto.x;
    let mouseY = objeto.y;

    
    const imagemBola = new Image();
    imagemBola.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg';

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      mouseX = Math.max(objeto.raio, Math.min(canvas.width - objeto.raio, x));
      mouseY = Math.max(objeto.raio, Math.min(canvas.height - objeto.raio, y));
    });

    function desenhar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      objeto.x = mouseX;
      objeto.y = mouseY;

      if (imagemBola.complete) {
        ctx.drawImage(
          imagemBola,
          objeto.x - objeto.raio,
          objeto.y - objeto.raio,
          objeto.raio * 2,
          objeto.raio * 2
        );
      }

      requestAnimationFrame(desenhar);
    }

    desenhar();