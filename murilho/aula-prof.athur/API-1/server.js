
// importar biblioteca
const express = require("express");

// iniciando o servidor || criando uma aplicação express
const app = express();

// configurando para usar JSON
app.use(express.json());

// get -> buscar informações
app.get("/healthcheck", (request, response) => {
    return response.json({
        msg: "estamos vivos",
        status: true
    });
});

app.post("/usuario", (req, res) => {
    // request . body
    const { nome, email, senha} = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({
            msg: "Campos não preenchidos"
        })
    }

    console.log([
        nome,
        email,
        senha
    ]);

    return res.status(200).json({
        msg:"Usuário criado com sucesso"
    });
});

app.put("/usuario/:id", (req, res) => {

    const { id } = req.params;
    const { nome, email, senha } = req.body;

    if (!id || !nome || !email || !senha) {
        return res.status(400).json({
            msg:"Campos vazios"
        })
    }

    console.log("O id é:" + id);
    console.log({
        nome,
        email,
        senha
    });

    return res.status(200).json({ msg: "usuario atualizado com sucesso" });
});

// 3000 || 5000 || 5500
// 8080 || 8000
app.listen(8080, () => {
    console.log("estamos online!");
});