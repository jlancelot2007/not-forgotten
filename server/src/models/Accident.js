
module.exports = (sequelize, DataTypes) => {
   const Accident = sequelize.define('Accident', {
       accIndex: DataTypes.INTEGER,
       easting: DataTypes.INTEGER,
       northing: DataTypes.INTEGER,
       lng: { type: DataTypes.INTEGER,  unique: 'compositeIndex' },
       lat: { type: DataTypes.INTEGER, unique: 'compositeIndex' },
       severity: DataTypes.INTEGER,
       numcas: DataTypes.INTEGER,
       accdate: DataTypes.DATEONLY,
       acctime: DataTypes.DATE
   });

   return Accident;
};
