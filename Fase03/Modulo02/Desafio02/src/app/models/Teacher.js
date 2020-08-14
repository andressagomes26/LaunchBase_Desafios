const {age, date} = require("../../lib/utils")
const db = require('../../config/db')

module.exports = {
    // Seleciona todos os professores (index)
    all(callback){
        db.query(`SELECT * FROM teachers ORDER BY name ASC`, function(err, results){
            if(err) throw (`Database Error: ${err}`)

            callback(results.rows)
        })
    },

    // Criar novo professor (post)
    create(data, callback){
        const query = `
            INSERT INTO teachers(
                avatar_url,
                name,
                data_nasc,
                escolaridade,
                aula,
                area
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `
            /*  avatar_url,            
                name,
                birth_date,
                education_level,
                class_type,
                subjects_taught
            */
        const values = [
            data.avatar_url,
            data.name,
            //Date.parse(data.data_nasc),
            date(data.data_nasc).iso,
            //data.data_nasc,
            data.escolaridade,
            data.aula,
            data.area
        ]
        
        db.query(query, values, function(err, results){
            if(err) throw (`Database error! ${err}`)

            callback(results.rows[0])
        })
    },

    // Exibir um professor (show)
    find(id, callback){
        db.query(`
        SELECT * 
        FROM teachers
        WHERE id = $1`, [id], function(err, results){
            if(err) throw (`Database Error: ${err}`)

            callback(results.rows[0])
        })
    },

    // Atualizar os dados de um professor ao editar (edit-put)
    update(data, callback){
        const query = `
        UPDATE teachers SET
            avatar_url=($1),
            name=($2),
            data_nasc=($3),
            escolaridade=($4),
            aula=($5),
            area=($6)
        WHERE id = $7
        `

        const values = [
            data.avatar_url,
            data.name,
            date(data.data_nasc).iso,
            data.escolaridade,
            data.aula,
            data.area,
            data.id
        ]

        db.query(query, values, function(err, results){
            if(err) throw (`Database error! ${err}`)

            callback()
        })
    },

    //Deleter professor
    delete(id, callback){
        db.query(`DELETE FROM teachers WHERE id = $1`, [id], function(err, results){
            if(err) throw (`Database error! ${err}`)

            return callback()
        })
    }
}