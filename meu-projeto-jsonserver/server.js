const express = require('express');
const app = express();
const port = 3000;

// Permite servir arquivos estáticos (como HTML, CSS, JS)
app.use(express.static('md-public'));

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
