const { age, date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    // Callback index - query buscar todos os dados
    all(callback){
        db.query(`SELECT * FROM members
        ORDER BY name DESC`, function(err, results){
            if(err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    },
    // Callback post - query inserir os dados no BD
    create(data, callback){
                
        const query = `
            INSERT INTO members(
                avatar_url,
                name,
                email,
                birth,
                gender,
                blood,
                weigth,
                height
            ) VALUES ($1,$2, $3, $4, $5, $6, $7, $8)
            RETURNING id
        `

        const values = [
            data.avatar_url,
            data.name, 
            data.email,
            date(data.birth).iso,
            data.gender,
            data.blood,
            data.weigth,
            data.height
        ]
    
        db.query(query, values, function(err, results){
            if(err) throw `Database Error! ${err}`
            
            callback(results.rows[0])
        })
    },
    // Callback show e edit - query buscar um registro no BD
    find(id, callback){
        db.query(`
            SELECT * FROM members
            WHERE id = $1`, [id], function(err, results){
                if(err) throw `Database Error! ${err}`
            
                callback(results.rows[0])
        })
    },
    // Callback put - query atualizar tabela
    update(data, callback){
        const query = `
            UPDATE members SET
                avatar_url=($1),
                name=($2),
                email=($3),
                birth=($4),
                gender=($5),
                blood=($6),
                weigth=($7),
                height=($8)
            WHERE id = $9
        `
        const values = [
            data.avatar_url,
            data.name, 
            data.email,
            date(data.birth).iso,
            data.gender,
            data.blood,
            data.weigth,
            data.height,
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
            DELETE FROM members
            WHERE id = $1`, [id], function(err, results){
                if(err) throw `Database Error! ${err}`
            
                return callback()
        })
    }


}