const fs = require('fs')
const data = require("./data.json")

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
