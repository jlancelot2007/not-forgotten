
module.exports = (sequelize, DataTypes) => {
   const Comment = sequelize.define('Comment', {
       title: DataTypes.STRING,
       user_Id: {
          type: DataTypes.INTEGER,  },
       tribute_Id: {
          type: DataTypes.INTEGER},
       comment: DataTypes.TEXT,
       postImageUrl: DataTypes.STRING,
       like: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
   });

   return Comment;
};
