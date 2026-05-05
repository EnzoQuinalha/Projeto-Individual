var quizModel = require("../models/quizModel");

function salvarHumanidade(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var pontuacao = req.body.pontuacaoServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu ID de usuário está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    } else {
        quizModel.salvarHumanidade(idUsuario, pontuacao)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao salvar o quiz! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function obterDadosGrafico(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.buscarDadosDash(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    salvarHumanidade,
    obterDadosGrafico
};