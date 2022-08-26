const express = require("express")
const router = express.Router();
const controller_assunto = require("../controllers/assunto");

router.get("/curso/:id/assunto", controller_assunto.getAssuntos);
router.get("/curso/:id/assunto/:AssuntoId", controller_assunto.getAssuntoById);

router.put("/assunto", controller_assunto.updateAssunto);

module.exports = router;