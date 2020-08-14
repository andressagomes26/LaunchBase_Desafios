const Teacher = require('../models/Teacher')
const {age, date} = require("../../lib/utils")

module.exports = {
    index(req, res){
        Teacher.all(function(professor){

            for (prof of professor){
                prof.area = String(prof.area)
                prof.area = prof.area.split(',')
            }

            return res.render('teachers/teachers', { professor })
        })
    },
    create(req, res){
        return res.render('teachers/create')
    },
    show(req, res){
        Teacher.find(req.params.id, function(professor){
            if(!professor) return res.send('Professor não encontrado')

            professor.data_nasc = age(professor.data_nasc)
            professor.area = professor.area.split(",")

            return res.render('teachers/show', {professor})
        })
    },
    post(req, res){
        const keys = Object.keys(req.body)    
    
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Preencha todos os campos")
            }
        }
        
        Teacher.create(req.body, function(professor){
            return res.redirect(`/teachers/${professor.id}`)
        })
    },
    edit(req, res){
        Teacher.find(req.params.id, function(professor){
            if(!professor) return res.send('Professor não encontrado')

            professor.data_nasc = date(professor.data_nasc).iso
            professor.area = professor.area.split(",")

            return res.render('teachers/edit', {professor})
        })
    },
    put(req, res){
        const keys = Object.keys(req.body)    
    
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Preencha todos os campos")
            }
        }
        
        Teacher.update(req.body, function() {
            return res.redirect(`/teachers/${req.body.id}`)
        })
    },
    delete(req, res){
        Teacher.delete(req.body.id, function() {
            return res.redirect(`/teachers`)
        })
    },
}