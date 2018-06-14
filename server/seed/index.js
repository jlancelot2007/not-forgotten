const {
sequelize,
Song,
User,
Tribute,
Bookmark,
Comment,
Tributelink
} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const tributes = require('./tributes.json')
const comments = require('./comments.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const tributelinks = require('./tributelinks.json')

sequelize.sync({force: true})
    .then(async function (){
            await Promise.all(
               users.map(user => {
                   User.create(user)
               })
            ),
            await Promise.all(
                songs.map(song => {
                    Song.create(song)
                })
             ),
             await Promise.all(
                tributes.map(tribute => {
                     Tribute.create(tribute)
                 })
              ),
              await Promise.all(
                comments.map(comment => {
                     Comment.create(comment)
                 })
              ),
             await Promise.all(
               bookmarks.map(bookmark => {
                    Bookmark.create(bookmark)
                })
             ),
             await Promise.all(
                tributelinks.map(tributelink => {
                     Tributelink.create(tributelink)
                 })
              )

    })