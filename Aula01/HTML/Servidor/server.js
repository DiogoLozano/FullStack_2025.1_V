
const express = require('express');
const db = require('./db');
const app = express();
const PORT = 80;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/projetos');
});

app.get('/projetos', (req, res) => {
  res.send('<h1>Bem-vindo à página de projetos!</h1>');
});

app.get('/cadastra', (req, res) => {
  res.sendFile(__dirname + '/public/cadastro.html');
});

app.post('/cadastra', async (req, res) => {
  const { nome, email, senha } = req.body;
  await db.cadastrarUsuario(nome, email, senha);
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const autenticado = await db.autenticarUsuario(email, senha);
  res.render('resposta', { sucesso: autenticado });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    const autenticado = await db.autenticarUsuario(email, senha);
    
    if (autenticado) {
      res.render('sucesso', { email });
    } else {
      res.render('falha');
    }
  });

  app.post('/cadastra', async (req, res) => {
    const { nome, email, senha } = req.body;
  
    try {
      await db.cadastrarUsuario(nome, email, senha);
      res.render('cadastro-sucesso', { nome, email });
    } catch (err) {
      console.error(err.message);
      res.render('cadastro-falha', { erro: err.message });
    }
  });