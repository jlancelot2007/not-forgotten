const {Comment} = require('../models')

module.exports = {

    async index (req, res) {
        try {
             const comments = await Comment.findAll({
                limit: 10
             })
             res.send(comments);
        } catch (err) {
                res.status(500).send({
                    error: 'An error occurred trying to fetch comments.'
                })
            }   
   },
   async post (req, res) {
    try {
         const comment = await Comment.create(req.body);
         res.send(comment);
    } catch (err) {
            res.status(500).send({
                error: 'An error occurred trying to create a comment.'
            })
        }  
}
}