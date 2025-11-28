require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");

//  habilita JSON
app.use(express.json());

// arquivos estáticos
app.use(express.static(path.join(__dirname, ".", "public")));

//  rotas de usuários
const usuariosRoutes = require('./routes/usuarios');
app.use("/usuarios", usuariosRoutes);

//  rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "public", "index.html"));
});

//  porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



// marcio araya
