module.exports = (sequelize, Sequelize) => {
    const Agence = sequelize.define("agence", {
        code: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        nom: {
            type: Sequelize.STRING,
            allowNull: false
        },
        statut: {
            type: Sequelize.ENUM("actif", "inactif"),
            allowNull: false
        }
    })
    return Agence;
}