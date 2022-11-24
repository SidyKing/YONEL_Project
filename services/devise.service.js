const db = require("./../models");
const Devise = db.devise;
const Pays = db.pays;
module.exports = {

    createDevise(req, res) {
        Devise.create(req.body)
            .then(Devise => {
                res.status(201).json(Devise);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getAllDevise(req, res) {
        Devise.findAll({
            include: [{
                all: true, nested: true
            }]
        })
            .then(Devise => {
                res.status(200).json(Devise)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    getDeviseById(req, res) {
        const idDevise = req.params.id;
        Devise.findOne({
            include: [{
                all: true, nested: true
            }],
            where: { code_iso3: idDevise }
        })
            .then(Devise => {
                res.status(200).json(Devise)
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    updateDevise(req, res) {
        const idDevise = req.params.id;
        Devise.update(req.body, { where: { code_iso3: idDevise } })
            .then(Devise => {
                res.status(201).json(Devise);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    },

    deleteDevise(req, res) {
        const idDevise = req.params.id;
        Devise.destroy({ where: { code_iso3: idDevise } })
            .then(() => {
                res.status(200).json({ status: 'success', message: 'Devise supprimé' })
            })
            .catch(err => { res.status(500).json({ status: 'error', message: JSON.stringify(err) }) });

    }
}
