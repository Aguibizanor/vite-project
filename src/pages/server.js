const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const produtos = [
    { id: 1, name: 'Produto 1', descricao: 'Descrição do Produto 1', imagem: 'url_da_imagem_1' },
    { id: 2, name: 'Produto 2', descricao: 'Descrição do Produto 2', imagem: 'url_da_imagem_2' },
    { id: 3, name: 'Produto 3', descricao: 'Descrição do Produto 3', imagem: 'url_da_imagem_3' },
    { id: 4, name: 'Produto 4', descricao: 'Descrição do Produto 4', imagem: 'url_da_imagem_4' },
    { id: 5, name: 'Produto 5', descricao: 'Descrição do Produto 5', imagem: 'url_da_imagem_5' },
    // Adicione mais produtos conforme necessário
];

app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});