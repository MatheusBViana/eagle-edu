const express = require("express")
const router = express.Router();
const controller_course = require("../controllers/curso");

router.get("/course", controller_course.getCursos);
router.get("/course/:id", controller_course.getCursoById);
router.put("/course", controller_course.updateCurso);
router.delete("/course/:id", controller_course.deleteCurso);

module.exports = router;