
module.exports = (sequelize, DataTypes) => {
   const Comment = sequelize.define('Comment', {
       title: DataTypes.STRING,
       user_Id:  DataTypes.INTEGER,
       tribute_Id:  DataTypes.INTEGER,
       comment: DataTypes.TEXT,
       postImageUrl: DataTypes.STRING
   });

   return Comment;
};
