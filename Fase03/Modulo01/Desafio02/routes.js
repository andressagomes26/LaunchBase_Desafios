const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res){
    return res.redirect("teachers")
})

routes.get('/teachers', function(req, res){
    return res.render("teachers")
})

routes.get('/students', function(req, res){
    return res.render("students")
})
module.exports = routes