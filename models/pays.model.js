module.exports = (sequelize, Sequelize) => {
    const Pays = sequelize.define("pays", {
        code_iso2: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        nom: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return Pays;
}