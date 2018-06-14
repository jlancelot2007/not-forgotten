var _ = require('lodash');
const {
    Bookmark,
    Song,
    User
    } = require('../models')

module.exports = {
        async index (req, res) {
            try {
                let songs = null
                const {songId, userId} = req.query
                console.log(req.query)
                console.log({songId, userId})
                const   bookmark = await Bookmark.findAll({
                where: req.query
          //      {      needs to be object else values are undefined          
           //         songId:  songId,
          //          userId:  userId
          //   }
 })
 console.log(bookmark)
               res.send(bookmark || {});
                } catch (err) {
                    res.status(500).send({
                        error: 'error fetching bookmark'
                    })
            }
        },
        async delete (req, res) {
            try {
                const {bookmarkId} = req.params
                const bookmark =  await Bookmark.findById(bookmarkId)
                await bookmark.destroy()
                res.send(bookmark)
            } catch (err) {
                
                res.status(500).send({
                    error: 'an error has occurred trying to delete bookmark'
                })
            }
         
        },
        async post (req, res) {
            try {
               
              const bookmark = req.body 
              console.log(req.body)
                const newBookmark = await Bookmark.create(req.body )
                res.send(newBookmark)
            } catch (err) {
                console.log(err)
                res.status(500).send({
                    error: 'an error has occurred trying to create a new bookmark'
                })
            }
         
       }        
       }

 

