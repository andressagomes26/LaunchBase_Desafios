const fs = require('fs')
const data = require("./data.json")
const {age, date} = require("./utils")

//Show 
exports.show = function(req, res){
    const { id } = req.params

    const foundTeacher = data.teacher.find(function(prof){
        return id == prof.id
    })

    if(!foundTeacher){
        return res.send('Professor não cadastrado')
    } 

    let professor = {
        ...foundTeacher,
        data_nasc: age(foundTeacher.data_nasc),
        area: foundTeacher.area.split(','),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
    }
    
    return res.render('teachers/show', { professor })
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

    const professor = {
        ...foundTeacher,
        area: foundTeacher.area.split(','),
        data_nasc: date(foundTeacher.data_nasc)
    }

    return res.render('teachers/edit', { professor })
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
