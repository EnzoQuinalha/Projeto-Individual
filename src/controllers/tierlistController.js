var tierlistModel = require("../models/tierlistModel");

function listar(req, res) {
    var idUsuario = req.params.idUsuario

    if (idUsuario == undefined) {
            return res.status(400).send("Seu id está undefined!");
    }

    tierlistModel.listar(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarTodos(req, res){
    tierlistModel.listarTodos().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var idUsuario = req.params.idUsuario;
    // var idBoss = req.body.id_boss;
    // var notaTier = req.body.tier_nota;
    var listaDeBosses = req.body;
    console.log(idUsuario);
    
    if (idUsuario == undefined) {
        return res.status(400).send("Seu id está undefined!");
    }

    for(let i = 0; i < listaDeBosses.length; i++){
        var idBoss = listaDeBosses[i].id_boss
        var notaTier = listaDeBosses[i].tier_nota

        if(idBoss == undefined) {
            console.log(`Boss sem id ${i}`);
            continue
        }else if(notaTier == undefined) {
            console.log("Tier sem nota", i);
        }

        tierlistModel.publicar(idUsuario,idBoss,notaTier).then(function(resposta){
        }).catch(function(erro){
            console.log(erro.sqlMessage);
        })
    }
    res.status(200).send("Boss avaliado com sucesso");
    
}

module.exports = {
    listar,
    cadastrar,
    listarTodos
}