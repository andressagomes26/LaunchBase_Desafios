const { age, date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    // Callback index - query buscar todos os dados
    all(callback){
        db.query(`SELECT * 
        FROM instructors
        ORDER BY NAME ASC`, function(err, results){
            if(err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    },
    // Callback post - query inserir os dados no BD
    create(data, callback){
                
        const query = `
            INSERT INTO instructors(
                avatar_url,
                name, 
                birth,
                gender,
                services,
                created_at
            ) VALUES ($1,$2, $3, $4, $5, $6)
            RETURNING id
        `

        const values = [
            data.avatar_url,
            data.name, 
            date(data.birth).iso,
            data.gender,
            data.services,
            date(Date.now()).iso            
        ]
    
        db.query(query, values, function(err, results){
            if(err) throw `Database Error! ${err}`
            
            callback(results.rows[0])
        })
    },
    // Callback show e edit - query buscar um registro no BD
    find(id, callback){
        db.query(`
            SELECT * FROM instructors
            WHERE id = $1`, [id], function(err, results){
                if(err) throw `Database Error! ${err}`
            
                callback(results.rows[0])
        })
    },
    // Callback put - query atualizar tabela
    update(data, callback){
        const query = `
            UPDATE instructors SET
                avatar_url=($1),
                name=($2),
                birth=($3),
                gender=($4),
                services=($5)
            WHERE id = $6
        `
        const values = [
            data.avatar_url,
            data.name, 
            date(data.birth).iso,
            data.gender,
            data.services,
            data.id
        ]

        db.query(query, values, function(err, results){
            if(err) throw `Database Error! ${err}`

            callback()
        })
    },
    // Callback delete - query deletar um registro no BD
    delete(id, callback){
        db.query(`
            DELETE FROM instructors
            WHERE id = $1`, [id], function(err, results){
                if(err) throw `Database Error! ${err}`
            
                return callback()
        })
    }


}