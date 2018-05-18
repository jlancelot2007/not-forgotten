const AuthenticationController = require('./controllers/AuthenticationController');
const  AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const TributesController = require('./controllers/TributesController');
const CommentsController = require('./controllers/CommentsController');
const AccidentsController = require('./controllers/AccidentsController');
const SongsController = require('./controllers/SongsController');

module.exports = (app) => {
    app.post("/register", 
       AuthenticationControllerPolicy.register,
       AuthenticationController.register),

    app.post("/login", 
       AuthenticationController.login),

    app.get("/accidents", 
       AccidentsController.index),
   app.post("/accident", 
       AccidentsController.post),
        
    app.get("/tributes", 
       TributesController.index),
  app.post("/tribute", 
      TributesController.post),
        
  app.get("/comments", 
      CommentsController.index),
    app.post("/comment", 
     CommentsController.post),

   app.get("/songs", 
       SongsController.index),
    app.post("/song", 
        SongsController.post)
}