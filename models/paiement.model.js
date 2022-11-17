module.exports = (sequelize, Sequelize) => {
    const Paiement = sequelize.define("paiement", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        numero_piece: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        type_piece: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nom_recepteur: {
            type: Sequelize.STRING,
            allowNull: false
        },

    });
    return Paiement;
}