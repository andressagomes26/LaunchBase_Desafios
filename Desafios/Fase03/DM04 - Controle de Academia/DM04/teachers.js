const fs = require('fs')
const data = require('./data.json')
const { age, graduation, typeClass, date } = require('./utils')

exports.show = function(req, res){
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send('Teacher not found')

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        education: graduation(foundTeacher.education),
        typeClass: typeClass(foundTeacher.typeClass),
        area: foundTeacher.area.split(','),
        created_at: new Intl.DateTimeFormat('pt-Br').format(foundTeacher.created_at)
    }

    return res.render("teachers/show", {teacher})
}

exports.edit = function(req, res){
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send('Teacher not found')

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    return res.render("teachers/edit", { teacher })
}

exports.post =  function(req, res){
    const keys = Object.keys(req.body) 
    
    for(key of keys){
        if(req.body[key] == ""){  
            return res.send('Please, fill in all fields!')
        }
    }

    let { avatar, name, birth, education, typeClass, area } = req.body
    
    birth = Date.parse(birth)
    const id = Number(data.teachers.length + 1)
    const created_at = Date.now()

    data.teachers.push({
        id,
        avatar, 
        name, 
        birth, 
        education, 
        typeClass, 
        area,
        created_at
    })
    
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/teachers")
     })
}
