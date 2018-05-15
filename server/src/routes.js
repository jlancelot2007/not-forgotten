const AuthenticationController = require('./controllers/AuthenticationController');
const  AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const TributeController = require('./controllers/TributeController');
const CommentController = require('./controllers/CommentController');
const AccidentController = require('./controllers/AccidentController');
const SongController = require('./controllers/SongController');

module.exports = (app) => {
    app.post("/register", 
       AuthenticationControllerPolicy.register,
       AuthenticationController.register),

    app.post("/login", 
       AuthenticationController.login),

    app.get("/accidents", 
       AccidentController.index),
   app.post("/accident", 
       AccidentController.post),
        
    app.get("/tributes", 
       TributeController.index),
 // app.post("/tribute", 
  //     TributeController.post),
        
  app.get("/comments", 
      CommentController.index),
  //  app.post("/comment", 
  //     CommentController.post),

   app.get("/songs", 
       SongController.index),
    app.post("/song", 
        SongController.post)
}