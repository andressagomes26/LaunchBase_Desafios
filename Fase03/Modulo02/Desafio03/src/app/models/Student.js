const {age, date} = require("../../lib/utils")
const db = require('../../config/db')

module.exports = {
    // Seleciona todos os estudantes (index)
    all(callback){
        db.query(`SELECT * FROM students ORDER BY name ASC`, function(err, results){
            if(err) throw (`Database Error: ${err}`)

            callback(results.rows)
        })
    },

    // Criar novo estudante (post)
    create(data, callback){
        const query = `
            INSERT INTO students(
                avatar_url,
                name,
                email,
                data_nasc,
                ano,
                horas,
                teacher_id
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `

        const values = [
            data.avatar_url,
            data.name,
            data.email,
            date(data.data_nasc).iso,
            data.ano,
            data.horas,
            data.professorSelected
        ]
        
        db.query(query, values, function(err, results){
            if(err) throw (`Database error! ${err}`)

            callback(results.rows[0])
        })
    },

    // Exibir um estudante (show)
    find(id, callback){
        db.query(`
        SELECT students.*, teachers.name AS teacher_name
        FROM students
        LEFT JOIN teachers ON (students.teacher_id = teachers.id)
        WHERE students.id = $1`, [id], function(err, results){
            if(err) throw (`Database Error: ${err}`)

            callback(results.rows[0])
        })
    },

    // Atualizar os dados de um estudante ao editar (edit-put)
    update(data, callback){
        const query = `
        UPDATE students SET
            avatar_url=($1),
            name=($2),
            email=($3),
            data_nasc=($4),
            ano=($5),
            horas=($6),
            teacher_id=($7)
        WHERE id = $8
        `

        const values = [
            data.avatar_url,
            data.name,
            data.email,
            date(data.data_nasc).iso,
            data.ano,
            data.horas,
            data.professorSelected,
            data.id
        ]

        db.query(query, values, function(err, results){
            if(err) throw (`Database error! ${err}`)

            callback()
        })
    },

    //Deletar estudante
    delete(id, callback){
        db.query(`DELETE FROM students WHERE id = $1`, [id], function(err, results){
            if(err) throw (`Database error! ${err}`)

            return callback()
        })
    },

    studentSelectOptions(callback){
        db.query(`SELECT name, id FROM teachers`, function(err, results){
            if(err) throw (`Database Error: ${err}`)

            callback(results.rows)
        })
    }
}