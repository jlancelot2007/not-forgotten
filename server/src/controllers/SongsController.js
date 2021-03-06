const {Song} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = {

    async index (req, res) {
        try {
            let songs = null
            const search = req.query.search
            if (search) {
                songs = await Song.findAll({
                   where: 
                           {title: {[Op.like]: '%' + search + '%'} }     
                    } )
                //    res.send(songs);
                }         
             else {
             songs = await Song.findAll({
                limit: 10
             })
            }
             res.send(songs);
            }
              catch (err) {
                res.status(500).send({
                    error: 'An error occurred trying to fetch the songs.'
                })
            }         
               
   },
   async show (req, res) {
    try {
         const song = await Song.findById(req.params.songId)
         res.send(song);
    } catch (err) {
            res.status(500).send({
                error: 'An error occurred trying to fetch this song.'
            })
        }   
},
   async post (req, res) {
    try {
         const song = await Song.create(req.body);
         res.send(song);
    } catch (err) {
            res.status(500).send({
                error: 'An error occurred trying to create the song.'+ err
            })
        }  
},
async put (req, res) {
    try {
         const song = await Song.update(req.body, {
             where: {
                 id: req.params.songId
             }
         });
         res.send(req.body);
    } catch (err) {
            res.status(500).send({
                error: 'An error occurred trying to update this song.'+ err
            })
        }  
}
}