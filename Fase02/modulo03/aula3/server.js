const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views',{
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res){
    const about = {
        avatar_url: 'https://avatars3.githubusercontent.com/u/60404990?s=460&u=a92fa837afb96674808f156aa69af429b61ad948&v=4',
        name: 'Andressa Gomes',
        role: 'Estudante - UFC',
        description: "Acadêmica de Engenharia da Computação (UFC), bolsista no Programa de Educação tutorial - PET / Futura programadora full-stack. Acessar <a href='https://rocketseat.com.br/' target='_blank'>Site</a>",
        links: [
            {name: 'GitHub', url:'https://github.com/andressagomes26'},
            {name: 'Linkedin', url:'https://www.linkedin.com/feed/'},
            {name: 'Instagram', url:'https://www.instagram.com/?hl=pt-br'}
        ]
    }

    return res.render('about', { about })
})

server.get('/portfolio', function(req, res){

    return res.render('portfolio', {items: videos})
})

server.get('/video', function(req, res){
    const id = req.query.id
    
    const video = videos.find(function(video){
        return video.id == id
    })

    if(!video){
        return res.send("Video not found!")
    }
    
    return res.render('video', { item: video })
})

server.listen(5000, function(){
    console.log('server is running')
})

