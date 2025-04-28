const form = document.getElementById('cadastroForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const params = new URLSearchParams(formData);
  
  await fetch('/cadastrarUsuario?' + params.toString(), {
    method: 'GET'
  });
  alert('Cadastro feito! Agora faça login.');
  window.location.href = '/login';
});