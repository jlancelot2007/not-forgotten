const {Tributelink} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
    index () {
         return Api().get('tributelinks')
    },
    async post (req, res) {
        try {
            const {accId, userId} = req.body
           const tributelink = await Tributelink.findOne({
               where: {
                   TributeId: tributeId,
                   UserId: userId
               }
           })
           if (bookmarklink) {
               return res.status(400).send({
                   error: 'you already have this set as a link'
               })
           }


            const newBookmark = await Bookmark.create({
                SongId: songId,
                UserId, userId
            })
            res.send(newBookmark)
        } catch (err) {
            consolelog(err)
            res.status(500).send({
                error: 'an error has occurred trying to create a new bookmark'
            })
        }
     
   }
}

