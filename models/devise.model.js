module.exports = (sequelize, Sequelize) => {
    Devise = sequelize.define("devise", {
        code_iso3: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
        },
        nom: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        symbole: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    });
    return Devise;
}