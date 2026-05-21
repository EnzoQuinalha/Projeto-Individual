var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");

router.post("/salvar", function (req, res) {
    quizController.salvarHumanidade(req, res);
});

router.get("/status/:idUsuario", function (req, res) {
    quizController.obterDadosGrafico(req, res);
});

router.get("/verificar/:idUsuario", function (req, res) {
    quizController.verificarQuiz(req, res);
});

router.get("/percentil/:idUsuario", function (req,res){
    quizController.pegarPercentil(req,res);
})
module.exports = router;