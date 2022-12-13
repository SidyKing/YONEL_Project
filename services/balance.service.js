const { agence } = require("./../models");
const db = require("./../models");
const Balance = db.balance;
const Agence = db.agence;
module.exports = {

    createBalance(req, res) {
        Balance.create(req.body)
            .then(Balance => {
                res.status(201).json(Balance);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getAllBalance(req, res) {
        Balance.findAll({
            include: [{
                all: true, nested: true
            }]
        })
            .then(Balance => {
                res.status(200).json(Balance)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getBalanceById(req, res) {
        const idBalance = req.params.id;
        Balance.findOne({
            include: [{
                all: true, nested: true
            }],
            where: { id: idBalance }
        })
            .then(Balance => {
                res.status(200).json(Balance)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    updateBalance(req, res) {
        const idBalance = req.params.id;
        Balance.update(req.body, { where: { id: idBalance } })
            .then(Balance => {
                res.status(201).json(Balance);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    deleteBalance(req, res) {
        const idBalance = req.params.id;
        Balance.destroy({ where: { id: idBalance } })
            .then(() => {
                res.status(200).json({ status: 'success', message: 'Balance supprimé' })
            })
            .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) });
    },
    verifAgence(req, res) {
        const code = req.body.agenceCode
        Balance.findOne({ where: { agenceCode: code } })
            .then(Balance => {
                res.status(200).json(Balance)
            })
            .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) });
    }

}

