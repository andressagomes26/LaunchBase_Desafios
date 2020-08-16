const Student = require('../models/Student')
const {age, date, grade} = require("../../lib/utils")

module.exports = {
    index(req, res){
        Student.all(function(estudante){

            for (aluno of estudante){
                aluno.area = String(aluno.area)
                aluno.area = aluno.area.split(',')
            }
            return res.render('students/students', { estudante })
        })
    },
    create(req, res){
        Student.studentSelectOptions(function(options){
            return res.render('students/create', {studentOptions: options})

        })
    },
    show(req, res){
        Student.find(req.params.id, function(estudante){
            if(!estudante) return res.send('Aluno não encontrado')

            
            estudante.data_nasc = age(estudante.data_nasc)
            estudante.ano = grade(estudante.ano)
            //estudante.data_nasc = date(estudante.data_nasc).birthDay
            //estudante.area = estudante.area.split(",")

            return res.render('students/show', {estudante})
        })
    },
    post(req, res){
        const keys = Object.keys(req.body)    
    
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Preencha todos os campos")
            }
        }
        
        Student.create(req.body, function(estudante){
            return res.redirect(`/students/${estudante.id}`)
        })
    },
    edit(req, res){
        Student.find(req.params.id, function(estudante){
            if(!estudante) return res.send('Aluno não encontrado')

            estudante.data_nasc = date(estudante.data_nasc).iso
            //estudante.area = estudante.area.split(",")

            Student.studentSelectOptions(function(options){
                return res.render('students/edit', {estudante, studentOptions: options})
    
            })
        })
    },
    put(req, res){
        const keys = Object.keys(req.body)    
    
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Preencha todos os campos")
            }
        }
        
        Student.update(req.body, function() {
            return res.redirect(`/students/${req.body.id}`)
        })
    },
    delete(req, res){
        Student.delete(req.body.id, function() {
            return res.redirect(`/students`)
        })
    },
}

/*module.exports = {
    index(req, res){
        return res.render('students/students', { estudante: data.students })
    },
    create(req, res){
        return res.render('students/create')
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
            if(req.body[key] == ""){
                return res.send("Preencha todos os campos")
            }
        }
        
        return
    },
    delete(req, res){
        return
    },
}
*/
