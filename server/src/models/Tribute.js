
module.exports = (sequelize, DataTypes) => {
   const Tribute = sequelize.define('Tribute', {
       title: { type: DataTypes.STRING, allowNull: false },
       person: { type: DataTypes.STRING, allowNull: false },
        user_Id: {
          type: DataTypes.INTEGER,  
  },
       accident_Id: {
          type: DataTypes.INTEGER,  
},
       tribute: DataTypes.TEXT,
       postImageUrl: DataTypes.STRING,
       postThumbUrl: DataTypes.STRING,
       tab: DataTypes.TEXT,
       publish: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
   });

   return Tribute;
};
