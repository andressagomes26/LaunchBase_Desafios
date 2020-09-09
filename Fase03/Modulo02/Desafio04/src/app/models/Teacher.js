const {age, date} = require("../../lib/utils")
const db = require('../../config/db')

module.exports = {
    // Seleciona todos os professores (index)

    /*        
        SELECT teachers.*, count(students) AS total_students -> Seleciona tudo de teachers e conta quantos estudantes cada professor ensina e armazerna esse valor em total_students
        FROM teachers
        LEFT JOIN students ON (teachers.id = students.teacher_id)  -> Junta as colunas id de teachers e teacher_id de students
        GROUP BY teachers.id   -> Junta os total_studnts de acordo com o id dos professores
        ORDER BY total_students DESC -> Ordena de forma decrescente de quem ensina mais alunos para quem ensina menos
    */

    all(callback){
        db.query(`
        SELECT teachers.*, count(students) AS total_students 
        FROM teachers
        LEFT JOIN students ON (teachers.id = students.teacher_id)
        GROUP BY teachers.id 
        ORDER BY total_students DESC`, function(err, results){
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

    // Responsável por filtrar os dados dos professores
    findBy(filter, callback){
        db.query(`
        SELECT teachers.*, count(students) AS total_students 
        FROM teachers
        LEFT JOIN students ON (teachers.id = students.teacher_id)
        WHERE teachers.name ILIKE '%${filter}%'
        OR teachers.area ILIKE '%${filter}%'
        GROUP BY teachers.id 
        ORDER BY total_students DESC`, function(err, results){
            if(err) throw (`Database Error: ${err}`)

            callback(results.rows)
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
    },

    // Paginação 
    paginate(params){
        const {filter, limit, offset, callback } = params

        let query = "",
            filterQuery = "",
            totalQuery = `(
                SELECT count(*) FROM teachers
            ) AS total` 
        
        if(filter){
            
            filterQuery = `
            WHERE teachers.name ILIKE '%${filter}%'
            OR teachers.area ILIKE '%${filter}%'
            `
        }

        totalQuery = `(
            SELECT count(*) FROM teachers
            ${filterQuery}
        ) AS total` 

        query = `
        SELECT teachers.*, ${totalQuery}, count(students) AS total_students 
        FROM teachers
        LEFT JOIN students ON (teachers.id = students.teacher_id)
        ${filterQuery}
        GROUP BY teachers.id LIMIT $1 OFFSET $2`
    
        db.query(query, [limit, offset], function(err, results){
            if(err) throw 'Database Error!'

            callback(results.rows)
        })
    }
}

        /*
        let query = `
        SELECT teachers.*, count(students) AS total_students 
        FROM teachers
        LEFT JOIN students ON (teachers.id = students.teacher_id)`

        if(filter){
            query = `${query}
            WHERE teachers.name ILIKE '%${filter}%'
            OR teachers.area ILIKE '%${filter}%'
            `
        }

        query = `${query}
        GROUP BY teachers.id LIMIT $1 OFFSET $2`
    
        db.query(query, [limit, offset], function(err, results){
            if(err) throw 'Database Error!'

            callback(results.rows)
        })*/