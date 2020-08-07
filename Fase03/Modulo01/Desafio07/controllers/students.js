const fs = require('fs')
const data = require("../data.json")
const {grade, date} = require("../utils")
const Intl = require('intl')

//Index - pag students
exports.index = function(req, res){
    return res.render('students/students', { estudante: data.students })
}

// Create
exports.create = function(req, res){
    return res.render('students/create')
}

//Show - EXIBIR
exports.show = function(req, res){
    const { id } = req.params

    const foundStudent = data.students.find(function(aluno){
        return id == aluno.id
    })

    if(!foundStudent){
        return res.send('Estudante não cadastrado')
    } 
 
    let estudante = {
        ...foundStudent,
        data_nasc: date(foundStudent.data_nasc).birthDay,
        ano: grade(foundStudent.ano)
    }
    
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if(err) return res.send("Write file error")

    return res.render('students/show', { estudante })
    })
}

// Post
exports.post = function(req, res){

    const keys = Object.keys(req.body)    
    
    for(key of keys){
        if(req.body[key] == ""){
            return res.send("Preencha todos os campos")
        }
    }
     
    data_nasc = Date.parse(req.body.data_nasc)
    
    horas = Number(req.body.horas)
    
    let id = 1
    const lastStudent = data.students[data.students.length - 1]
    if(lastStudent){
        id = lastStudent.id + 1
    }

    data.students.push({
        id,
        ...req.body,
        data_nasc,
        horas
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if(err) return res.send('Write file error')

        return res.redirect(`/students/${id}`)
    })
}

//Edit
exports.edit = function(req, res){
    const { id } = req.params

    const foundStudent = data.students.find(function(aluno){
        return id == aluno.id
    })

    if(!foundStudent){
        return res.send('Estudante não cadastrado')
    } 
    const area3 = String(foundStudent.area)
    const estudante = {
        ...foundStudent,
        data_nasc: date(foundStudent.data_nasc).iso
    }

    return res.render('students/edit', { estudante })
}

//PUT - ATUALIZAR
exports.put = function(req, res){
    const { id } = req.body

    let index = 0

    const foundStudent = data.students.find(function(aluno, indexFound){
        if(id == aluno.id){
            index = indexFound
            return true
        }
    })

    if(!foundStudent){
        return res.send('Estudante não cadastrado')
    } 

    const estudante = {
        ...foundStudent,
        ...req.body,
        data_nasc: Date.parse(req.body.data_nasc),
        id: Number(req.body.id)
    }

    data.students[index] = estudante

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if(err) return res.send("Write file error")

        return res.redirect(`/students/${id}/`)
    })

}

//Delete
exports.delete = function(req, res){
    const { id } = req.body

    const aluno_filter = data.students.filter(function(aluno){
        return aluno.id != id
    })

    data.students = aluno_filter

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if(err) return res.send("Write file error")

        return res.redirect(`/students`)
    })
}