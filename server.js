const express = require('express');
const app = express();
const port = 3000;

// Define a pasta 'public' para arquivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
