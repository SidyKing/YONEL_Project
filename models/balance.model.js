module.exports = (sequelize, Sequelize) => {
    const Balance = sequelize.define("balance", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        montant: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    })
    return Balance;
}