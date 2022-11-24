const db = require("./../models");
const SousAgence = db.sousAgence;
const Agence = db.agence;
const Ville = db.ville;
module.exports = {
    createSousAgence(req, res) {
        SousAgence.create(req.body)
            .then(SousAgence => {
                res.status(201).json(SousAgence);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getAllSousAgence(req, res) {
        SousAgence.findAll({
            include: [{
                all: true, nested: true
            }]
        })
            .then(SousAgence => {
                res.status(200).json(SousAgence)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getSousAgenceById(req, res) {
        const idSousAgence = req.params.id;
        SousAgence.findOne({
            include: [{
                model: Agence,
            }],
            where: { code: idSousAgence }
        })
            .then(SousAgence => {
                res.status(200).json(SousAgence)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    updateSousAgence(req, res) {
        const idSousAgence = req.params.id;
        SousAgence.update(req.body, { where: { code: idSousAgence } })
            .then(SousAgence => {
                res.status(201).json(SousAgence);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    deleteSousAgence(req, res) {
        const idSousAgence = req.params.id;
        SousAgence.destroy({ where: { code: idSousAgence } })
            .then(() => {
                res.status(200).json({ status: 'success', message: 'SousAgence supprimé' })
            })
            .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) });

    }

}

