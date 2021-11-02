// Criando funções para o POST
const fs = require('fs')
const data = require('./data.json')

// Mostrar
exports.show = function(req, res){
    const { id } = req.params

    const foundInstructors = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if(!foundInstructors) return res.send("Instructor not found!")

    function age(timestamp){
        const today = new Date()
        const birth = new Date(timestamp)

        let age = today.getFullYear() - birth.getFullYear()
        const month = today.getMonth() - birth.getMonth()
        const day = today.getDate() - birth.getDate()

        if(month < 0 || month == 0 && day <=0 ){
            age -= 1
        }

        return age
    }
    const instructor = {
        ...foundInstructors,
        age: age(foundInstructors.birth),
        services: foundInstructors.services.split(','),
        created_at:""
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