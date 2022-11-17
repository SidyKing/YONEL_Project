module.exports = (sequelize, Sequelize) => {
    const SousAgence = sequelize.define("sous_agence", {
        code: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        nom: {
            type: Sequelize.STRING,
            allowNull: false
        },
        adresse: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        country: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        telephone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return SousAgence;
}