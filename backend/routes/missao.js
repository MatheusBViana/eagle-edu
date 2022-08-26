const express = require("express")
const router = express.Router();
const controller_mission = require("../controllers/missao");

router.get("/:id/missao", controller_mission.getMissionsFromSubject);
router.get("/assunto/:AssuntoId/missao/:id_missao", controller_mission.getMissionById);
router.put("/missao", controller_mission.updateMissao);

module.exports = router;