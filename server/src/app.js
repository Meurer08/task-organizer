const express = require('express')
const routes = require('./routes/index')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes)

app.use((req, res, next) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Erro interno do servidor' });
});


module.exports = app 