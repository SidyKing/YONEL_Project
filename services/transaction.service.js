const db = require("./../models");
const Transaction = db.transaction;
module.exports = {

    createTransaction(req, res) {
        console.log(req.body);
        Transaction.create(req.body)
            .then(Transaction => {
                res.status(201).json(Transaction);
            })
            .catch(error => {
                console.log(error)
                res.status(500).json(error)
            });
    },

    getAllTransaction(req, res) {
        Transaction.findAll({
            include: [{
                all: true, nested: true
            }]
        })
            .then(Transaction => {
                res.status(200).json(Transaction)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getTransactionById(req, res) {
        const idTransaction = req.params.id;
        Transaction.findOne({
            include: [{
                all: true, nested: true
            }],
            where: { id: idTransaction }
        })
            .then(Transaction => {
                res.status(200).json(Transaction)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    updateTransaction(req, res) {
        const idTransaction = req.params.id;
        Transaction.update(req.body, { where: { id: idTransaction } })
            .then(Transaction => {
                res.status(201).json(Transaction);
            })
            .catch(error => {
                console.log(error)
                res.status(500).json(error)
            });
    },

    deleteTransaction(req, res) {
        const idTransaction = req.params.id;
        Transaction.destroy({ where: { id: idTransaction } })
            .then(() => {
                res.status(200).json({ status: 'success', message: 'Transaction supprimé' })
            })
            .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) });

    },
    getTransactionByUserID(req, res) {
        const userId = req.body.userId
        Transaction.findOne({ where: { userId: userId } })
            .then(Transaction => {
                res.status(200).json(Transaction)
            })
            .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) });
    }
}

