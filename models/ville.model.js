module.exports = (sequelize, Sequelize) => {
    const Ville = sequelize.define("ville", {
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
    return Ville;
}