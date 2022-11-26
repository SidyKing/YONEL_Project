const db = require("../models");
const Client = db.client;
module.exports = {

    createClient(req, res) {
        console.log(req.body);
        Client.create(req.body)
            .then(Client => {
                res.status(201).json(Client);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getAllClient(req, res) {
        Client.findAll()
            .then(Client => {
                res.status(200).json(Client)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getClientById(req, res) {
        const idClient = req.params.id;
        Client.findOne({ where: { id: idClient } })
            .then(Client => {
                res.status(200).json(Client)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    updateClient(req, res) {
        const idClient = req.params.id;
        Client.update(req.body, { where: { id: idClient } })
            .then(Client => {
                res.status(201).json(Client);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    deleteClient(req, res) {
        const idClient = req.params.id;
        Client.destroy({ where: { id: idClient } })
            .then(() => {
                res.status(200).json({ status: 'success', message: 'Client supprimé' })
            })
            .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) });
    },

    verifClient(req, res) {
        const tel = req.body.tel
        Client.findOne({ where: { telephone: tel } })
            .then(Client => {
                res.status(200).json(Client)
            })
            .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) });
    }
}

