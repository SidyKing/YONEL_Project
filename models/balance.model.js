module.exports = (Sequelize, sequelize) => {
    Balance = sequelize.define("balance", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        montant: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    })
}