import "reflect-metadata";
import express from "express";
import "./database"

const app = express();

/**
 * => Principais Metodos <=
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 * */

app.get("/", (request, response) => {
    return response.json({ message: "Hello Word - NLW04" })
})

// 1 Param => Rota(Recurso API)
// 2 Param => request, response

app.post("/", (request, response) => {
    // Recebeu os dados para salvar
    return response.json({ message: "Os dados foram salvos com sucesso!"})
})

app.listen(3333, () => console.log('Server is running!'))
