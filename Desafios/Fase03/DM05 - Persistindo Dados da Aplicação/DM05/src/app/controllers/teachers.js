const { age, graduation, typeClass, date } = require('../../lib/utils')

module.exports = {
    index(req, res){
        return res.render("teachers/index")
    },
    create(req, res){
        return res.render("teachers/create")
    },
    post(req, res){
        const keys = Object.keys(req.body) 
    
        for(key of keys){
            if(req.body[key] == ""){  
                return res.send('Please, fill in all fields!')
            }
        }
    
        let { avatar, name, birth, education, typeClass, area } = req.body
        return
    },
    show(req, res){
        return
    },
    edit(req, res){
        return
    },
    update(req, res){
        const keys = Object.keys(req.body) 
    
        for(key of keys){
            if(req.body[key] == ""){  
                return res.send('Please, fill in all fields!')
            }
        }
    
        return
    },
    delete(req, res){
        return
    } 

}
