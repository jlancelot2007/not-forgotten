const {Tribute} = require('../models')

module.exports = {

    async index (req, res) {
        try {
             const tributes = await Tribute.findAll({
                limit: 10
             })
             res.send(tributes);
        } catch (err) {
                res.status(500).send({
                    error: 'An error occurred trying to fetch tributes.'
                })
            }   
   },
   async post (req, res) {
    try {
         const tribute = await Tribute.create(req.body);
         res.send(tribute);
    } catch (err) {
            res.status(500).send({
                error: 'An error occurred trying to create a tribute.'
            })
        }  
}
}
