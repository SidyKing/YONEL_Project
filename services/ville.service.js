const Pays = require("../models/pays.model");
const db = require("./../models");
const Ville = db.ville;
module.exports = {
    createVille(req, res) {
        Ville.create(req.body)
            .then(Ville => {
                res.status(201).json(Ville);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getAllVille(req, res) {
        Ville.findAll()
            .then(Ville => {
                res.status(200).json(Ville)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getVilleById(req, res) {
        const idVille = req.params.id;
        Ville.findOne({ where: { code_iso2: idVille } })
            .then(Ville => {
                res.status(200).json(Ville)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    updateVille(req, res) {
        const idVille = req.params.id;
        Ville.update(req.body, { where: { code_iso2: idVille } })
            .then(Ville => {
                res.status(201).json(Ville);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    deleteVille(req, res) {
        const idVille = req.params.id;
        Ville.destroy({ where: { code_iso2: idVille } })
            .then(() => {
                res.status(200).json({ status: 'success', message: 'Ville supprimé' })
            })
            .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) });

    }

}

