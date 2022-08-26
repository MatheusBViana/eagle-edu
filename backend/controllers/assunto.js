const modelo = require("../models/assunto");

module.exports.getAssuntos = (req, res) => {
    console.log(req.params.id);
    modelo.findAll({
        where: {
            CursoId: req.params.id
        }
    }).then(assuntos => res.send(assuntos))
    .catch(err => res.send(err));
}

module.exports.getAssuntoById = (req, res) => {
    modelo.findAll({
        where: {
            CursoId: req.params.id,
            id: req.paramsId
        }
    }).then(assunto => res.send(assunto));
}

module.exports.updateAssunto = (req, res) => {
    modelo.update({
            name: req.body.name,
            percentage: parseInt(req.body.percentage)
        }, 
        {
            where: {
                CursoId: req.body.id,
                id: req.bodyId
            }
        }
    ).then(() => res.send("Assunto Atualizado"));
}