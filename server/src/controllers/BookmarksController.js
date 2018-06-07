const {Bookmark} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
    index () {
         return Api().get('bookmarks')
    },
    async post (req, res) {
        try {
            const {songId, userId} = req.body
           const bookmark = await Bookmark.findOne({
               where: {
                   SongId: songId,
                   UserId: userId
               }
           })
           if (bookmark) {
               return res.status(400).send({
                   error: 'you already have this set as a bookmark'
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

