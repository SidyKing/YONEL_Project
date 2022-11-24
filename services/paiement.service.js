const db = require("./../models");
const Paiement = db.paiement;
const Transaction = db.transaction;
module.exports = {

    createPaiement(req, res) {
        Paiement.create(req.body)
            .then(Paiement => {
                res.status(201).json(Paiement);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getAllPaiement(req, res) {
        Paiement.findAll({
            include: [{
                all: true, nested: true
            }]
        })
            .then(Paiement => {
                res.status(200).json(Paiement)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getPaiementById(req, res) {
        const idPaiement = req.params.id;
        Paiement.findOne({
            include: [{
                all: true, nested: true
            }],
            where: { id: idPaiement }
        })
            .then(Paiement => {
                res.status(200).json(Paiement)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    updatePaiement(req, res) {
        const idPaiement = req.params.id;
        Paiement.update(req.body, { where: { id: idPaiement } })
            .then(Paiement => {
                res.status(201).json(Paiement);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    deletePaiement(req, res) {
        const idPaiement = req.params.id;
        Paiement.destroy({ where: { id: idPaiement } })
            .then(() => {
                res.status(200).json({ status: 'success', message: 'Paiement supprimé' })
            })
            .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) });

    }
}

