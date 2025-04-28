const form = document.getElementById('loginForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const params = new URLSearchParams(formData);
  
  const response = await fetch('/loginUsuario', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: params.toString()
  });
  
  if (response.redirected) {
    window.location.href = response.url;
  }
});