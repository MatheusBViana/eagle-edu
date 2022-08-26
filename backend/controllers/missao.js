const modeloMissao = require("../models/mission");
const modeloAssunto = require("../models/assunto");


const updateProgress = (id_assunto_buscado, res) => {
    modeloMissao.findAll({
        where: {
            AssuntoId: id_assunto_buscado
        }, 
        raw: true,
        attributes: ['answered']
    }).then(missions => {

        // Answered takes true or false
        let Answered = mission => mission.answered == true;

        let missionsAnswered = missions.filter(mission => Answered(mission));
        modeloAssunto.update(
            {
                progress: 100*missionsAnswered.length/missions.length
            },
            {
                where: {id: id_assunto_buscado}
            }
        ).then(() => res.send("Mission FInished"));
    });
}

// Retorna todas as missões de um determinado assunto
module.exports.getMissionsFromSubject = (req, res) => {
    modeloMissao.findAll({
        where: {
            AssuntoId: req.params.id
        }
    }).then(missions => res.send(missions));
}

// Retorna uma determinada missão especificada pelo id
module.exports.getMissionById = (req, res) => {
    modeloMissao.findAll({
        where: {
            AssuntoId: req.params.assunto,
            id: req.params.mission_id
        }
    }).then(mission => res.send(mission));
}

module.exports.updateMissao = (req, res) => {
    modeloMissao.update({
            title: req.body.title,
            answered: req.body.answered
        }, 
        {
            where: {
                AssuntoId: req.body.AssuntoId,
                id: req.body.id
            }
        }
    ).then(() => updateProgress(req.body.AssuntoId, res));
}
