module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('Bookmark', {

        songId: { type: DataTypes.INTEGER},
        userId: {type: DataTypes.INTEGER }

    })
    return Bookmark
}
