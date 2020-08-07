const {age, date} = require("../../lib/utils")
const Intl = require('intl')

module.exports = {
    index(req, res){
        return res.render('teachers/teachers',)
    },
    create(req, res){
        return res.render('teachers/create')
    },
    show(req, res){
        return
    },
    post(req, res){
        const keys = Object.keys(req.body)    
    
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Preencha todos os campos")
            }
        }
        return
    },
    edit(req, res){
        return
    },
    put(req, res){
        const keys = Object.keys(req.body)
        for(key of keys){
            if(req.body[key] == ''){
                return res.send('Preencha todos os campos.')
            }
        }

        return
    },
    delete(req, res){
        return
    },
}
