
module.exports = (sequelize, DataTypes) => {
   const Accident = sequelize.define('Accident', {
       accIndex: DataTypes.INTEGER,
       easting: DataTypes.INTEGER,
       northing: DataTypes.INTEGER,
       lng: DataTypes.STRING,
       lat: DataTypes.STRING,
       severity: DataTypes.INTEGER,
       numcas: DataTypes.INTEGER,
       accdate: DataTypes.DATEONLY,
       acctime: DataTypes.DATE
   });

   return Accident;
};
