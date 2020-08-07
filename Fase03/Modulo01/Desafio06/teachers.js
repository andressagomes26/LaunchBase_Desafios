const fs = require('fs')
const data = require("./data.json")
const {age, date} = require("./utils")
const Intl = require('intl')

//Index - pag teachers
exports.index = function(req, res){
    
    const professor = data.teacher

    for (prof of professor){
        prof.area = String(prof.area)
        prof.area = prof.area.split(',')
    }

    return res.render('teachers/teachers', { professor })
}


//Show - EXIBIR
exports.show = function(req, res){
    const { id } = req.params

    const foundTeacher = data.teacher.find(function(prof){
        return id == prof.id
    })

    if(!foundTeacher){
        return res.send('Professor não cadastrado')
    } 

    const area2 = String(foundTeacher.area)
    let professor = {
        ...foundTeacher,
        data_nasc: age(foundTeacher.data_nasc),
        //area: String(foundTeacher.area),
        //area: foundTeacher.area.split(','),
        area: area2.split(','),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
    }
    
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if(err) return res.send("Write file error")

    return res.render('teachers/show', { professor })
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
     
    let {avatar_url, name, data_nasc, escolaridade, aula, area} = req.body

    data_nasc = Date.parse(data_nasc)
    const created_at = Date.now()
    const id = Number(data.teacher.length + 1)

    data.teacher.push({
        id,
        avatar_url, 
        name, 
        data_nasc, 
        escolaridade, 
        aula,
        area,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if(err) return res.send('Write file error')

        return res.redirect('/teachers/create')
    })
}

//Edit
exports.edit = function(req, res){
    const { id } = req.params

    const foundTeacher = data.teacher.find(function(prof){
        return id == prof.id
    })

    if(!foundTeacher){
        return res.send('Professor não cadastrado')
    } 
    const area3 = String(foundTeacher.area)
    const professor = {
        ...foundTeacher,
      //  area: foundTeacher.area.split(','),
        area: area3.split(','),
        data_nasc: date(foundTeacher.data_nasc)
    }

    return res.render('teachers/edit', { professor })
}

//PUT - ATUALIZAR
exports.put = function(req, res){
    const { id } = req.body

    let index = 0

    const foundTeacher = data.teacher.find(function(prof, indexFound){
        if(id == prof.id){
            index = indexFound
            return true
        }
    })

    if(!foundTeacher){
        return res.send('Professor não cadastrado')
    } 

    const professor = {
        ...foundTeacher,
        ...req.body,
        data_nasc: Date.parse(req.body.data_nasc),
        id: Number(req.body.id)
    }

    data.teacher[index] = professor

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if(err) return res.send("Write file error")

        return res.redirect(`/teachers/${id}/`)
    })

}

//Delete
exports.delete = function(req, res){
    const { id } = req.body

    const prof_filter = data.teacher.filter(function(prof){
        return prof.id != id
    })

    data.teacher = prof_filter

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if(err) return res.send("Write file error")

        return res.redirect(`/teachers`)
    })
}