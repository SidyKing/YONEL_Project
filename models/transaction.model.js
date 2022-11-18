module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transaction", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        montant: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        frais: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        statut: {
            type: Sequelize.ENUM("Paid", "Transmitted", "Payable", "Cancelled"),
            allowNull: false,
        },
        emetteur: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        recepteur: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        devise_origine: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        devise_destination: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

    });
    return Transaction;
};