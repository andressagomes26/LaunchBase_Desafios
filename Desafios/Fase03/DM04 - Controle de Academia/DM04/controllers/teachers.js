const fs = require('fs')
const data = require('../data.json')
const { age, graduation, typeClass, date } = require('../utils')

exports.index = function(req, res){
    const teachers = data.teachers

    for (teacherIndex of teachers){
            teacherIndex.area = String(teacherIndex.area)
            teacherIndex.area = teacherIndex.area.split(',')
    }

    return res.render("teachers/index", { teachers })
}

exports.create = function(req, res){
    return res.render("teachers/create")
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
        area: foundTeacher.area.toString().split(','),
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
        birth: date(foundTeacher.birth).iso
    }

    return res.render("teachers/edit", { teacher })
}

exports.update = function(req, res){
    const { id } = req.body
    let index = 0

    const foundTeacher = data.teachers.find(function(teacher, foundIndex){
        if(teacher.id == id){
            index = foundIndex
            return true
        }
    })

    if(!foundTeacher) return res.send('Teacher not found')
    
    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: date(req.body.birth).iso
    }

    data.teachers[index] =  teacher

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect(`/teachers/${id}`)
     })
}

exports.delete = function(req, res){
    const { id } = req.body
    
    const filteredTeacher = data.teachers.filter(function(teacher){
        return teacher.id != id
    })

    data.teachers =  filteredTeacher

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect(`/teachers`)
     })
}