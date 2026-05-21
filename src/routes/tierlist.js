var express = require("express");
var router = express.Router();
var tierlistController = require("../controllers/tierlistController");

router.post("/cadastrar/:idUsuario", function (req, res) {
    tierlistController.cadastrar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    tierlistController.listar(req, res);
});

router.get("/listar", function (req, res){
    tierlistController.listarTodos(req, res);
});

module.exports = router;