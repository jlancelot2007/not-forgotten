const {User} = require('../models');

module.exports = {

    async register (req, res)  {
        try {
        const user = await User.create(req.body)
           res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use'
            })
        }

    },
    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
        
        if (!user) {
               return res.status(403).send({
                   error: "The login information was incorrect"+  userJson
               });
             
            const isPasswordValid = (password === user.password);
            if (!isPassswordValid) {
                return res.status(403).send({
                    error: "The login information was incorrect"
            })
        }
    }
        const userJson = user.toJSON();
               res.send({ userJson });
            } catch (err) {
                res.status(500).send({
                    error: 'An error occurred. Please try to login again.'+ userJson
                })
            }
    
}
}