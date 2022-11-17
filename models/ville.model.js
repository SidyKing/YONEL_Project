module.exports = (sequelize, Sequelize) => {
    Ville = sequelize.define("ville", {
        code_iso2: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
        },
        nom: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
}