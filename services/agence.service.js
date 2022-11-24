const db = require("./../models");
const Agence = db.agence;
const SousAgence = db.sousAgence;
module.exports = {

    createAgence(req, res) {
        Agence.create(req.body)
            .then(Agence => {
                res.status(201).json(Agence);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getAllAgence(req, res) {
        Agence.findAll()
            .then(Agence => {
                res.status(200).json(Agence)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getAgenceById(req, res) {
        const idAgence = req.params.id;
        Agence.findOne({ where: { code: idAgence } })
            .then(Agence => {
                res.status(200).json(Agence)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    updateAgence(req, res) {
        const idAgence = req.params.id;
        Agence.update(req.body, { where: { code: idAgence } })
            .then(Agence => {
                res.status(201).json(Agence);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    deleteAgence(req, res) {
        const idAgence = req.params.id;
        Agence.destroy({ where: { code: idAgence } })
            .then(() => {
                res.status(200).json({ status: 'success', message: 'Agence supprimé' })
            })
            .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) });
    }

}

