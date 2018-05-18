const {Accident} = require('../models')

module.exports = {

    async index (req, res) {
        try {
             const accidents = await Accident.findAll({
                 limit: 100
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