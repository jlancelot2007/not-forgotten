module.exports = (sequelize, DataTypes) => {
    const Tributelink = sequelize.define('Tributelink', {})

    Tributelink.associate = function (models){
        Tributelink.belongsTo(models.User)
        Tributelink.belongsTo(models.Tribute)
    }

    return Tributelink
}