INSERT INTO accidents (id, accIndex, Easting, Northing, lng, lat, severity, numcas, accdate, acctime, createdAt, updatedAt ) 
SELECT id, accIndex, Easting, Northing, lng, lat, severity, numcas, accidentdate, acctime, Date(), Date() from accidents2016