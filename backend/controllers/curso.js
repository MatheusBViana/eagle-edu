const subjectModel = require("../models/curso");

// Retorna todos os cursos do banco de dados
module.exports.getCursos = (req, res) => {
    console.log(req.body);
    console.log("aa")
    subjectModel.findAll().then(cursos => res.send(cursos));
}

// Retorna um determinado curso especificado pelo id
module.exports.getCursoById = (req, res) => {
    subjectModel.findByPk(req.params.id).then(curso => res.send(curso));
}
