const db = require("./../models");
const Pays = db.pays;
module.exports = {
    createPays(req, res) {
        Pays.create(req.body)
            .then(Pays => {
                res.status(201).json(Pays);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getAllPays(req, res) {
        Pays.findAll()
            .then(Pays => {
                res.status(200).json(Pays)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getPaysById(req, res) {
        const idPays = req.params.id;
        Pays.findOne({ where: { code_iso2: idPays } })
            .then(Pays => {
                res.status(200).json(Pays)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    updatePays(req, res) {
        const idPays = req.params.id;
        Pays.update(req.body, { where: { code_iso2: idPays } })
            .then(Pays => {
                res.status(201).json(Pays);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    deletePays(req, res) {
        const idPays = req.params.id;
        Pays.destroy({ where: { code_iso2: idPays } })
            .then(() => {
                res.status(200).json({ status: 'success', message: 'Pays supprimé' })
            })
            .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) });

    }

}

