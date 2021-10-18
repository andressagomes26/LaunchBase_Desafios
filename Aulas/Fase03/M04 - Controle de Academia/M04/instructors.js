// Criando funções para o POST

// create
exports.namePost = function(req, res){
    // Para validar se todos os campos no front-end foram preenchidos
    const keys = Object.keys(req.body) // retorna {avatar_url, name, birth, gender, services}

    for(let key in keys){
        if(req.body[key] == ""){  // req.body[key] == req.body[name] // retorna -> Nome passado no input
            return res.send('Please, fill in all fields!')
        }
    }
    return res.send(req.body)
}