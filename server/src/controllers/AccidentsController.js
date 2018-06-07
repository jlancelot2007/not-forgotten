const {Accident} = require('../models')
const {Tribute} = require('../models')


//Tribute.belongsTo(Accident)
//Accident.hasMany(Tribute)

              //   where: {  severity: req.params.severity,
               //            year: { [Op.in]: [YEAR([req.params.accdate])]
               //          }
module.exports = {

    async index (req, res) {
        try {
             const accidents = await Accident.findAll({
                 limit: 500,
                 raw: true
             })
        console.log(accidents)
             res.send(accidents);
        } catch (err) {
                res.status(500).send({
                    error: 'An error occurred trying to fetch accident locations.'
                })
            }   
   },
   async post (req, res) {
    try {
         const accident = await Accident.create(req.body);
         res.send(accident);
    } catch (err) {
            res.status(500).send({
                error: 'An error occurred trying to create an accident location.'
            })
        }  
}
}