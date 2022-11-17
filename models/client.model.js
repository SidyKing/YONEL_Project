module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nom: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        prenom: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        telephone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        date_naissance: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        lieu_naissance: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Client;
}