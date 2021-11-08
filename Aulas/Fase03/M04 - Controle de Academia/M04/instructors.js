// Criando funções para o POST
const fs = require('fs')
const data = require('./data.json')
const { age, date } = require('./utils')

// Index
exports.index = function(req, res){
    return res.render("instructors/index", { instructors: data.instructors })
}

// Mostrar
exports.show = function(req, res){
    const { id } = req.params

    const foundInstructors = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if(!foundInstructors) return res.send("Instructor not found!")

    
    const instructor = {
        ...foundInstructors,
        age: age(foundInstructors.birth),
        services: foundInstructors.services.split(','),
        created_at: new Intl.DateTimeFormat('pt-Br').format(foundInstructors.created_at)
    }

    return res.render("instructors/show", {instructor})
}

// create
exports.post = function(req, res){
    const keys = Object.keys(req.body) 

    for(key of keys){
        if(req.body[key] == ""){  
            return res.send('Please, fill in all fields!')
        }
    }

    let { avatar_url, name, birth, gender, services } = req.body

    birth = Date.parse(birth)
    const id = Number(data.instructors.length + 1)
    const created_at = Date.now()

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/instructors")
     })
}

// edit 
exports.edit = function(req, res){
    const { id } = req.params

    const foundInstructors = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if(!foundInstructors) return res.send("Instructor not found!")

    const instructor = {
        ...foundInstructors,
        birth: date(foundInstructors.birth)
    }
    
    return res.render("instructors/edit", { instructor })
}

// put 
exports.put = function(req, res){
    const { id } = req.body
    let index = 0

    const foundInstructors = data.instructors.find(function(instructor, foundIndex){
        if (instructor.id == id){
            index = foundIndex
            return true
        }

    })

    if(!foundInstructors) return res.send("Instructor not found!")

    const instructor = {
        ...foundInstructors,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.instructors[index] = instructor

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if (err) return res.send("Write error!")

        return res.redirect(`/instructors/${id}`)
     })

}

// delete
exports.delete = function(req, res){
    const { id } = req.body
    
    const filteredInstructors = data.instructors.filter(function(instructor){
        return instructor.id != id
    })

    data.instructors = filteredInstructors

    fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
        if (err) return res.send("Write error!")

        return res.redirect(`/instructors`)
     })

}