/* 
    Funções para retornar organizadamente a 
    idade(age), data de nasciento/aniversário
    (date) e o ano escolar(grade)
*/
module.exports = {
    age(timestamp){
        const date = new Date()
        const dateBirth = new Date(timestamp)

        let age = date.getFullYear() - dateBirth.getFullYear()
        const month = date.getMonth() - dateBirth.getMonth()
        const day = date.getDate() - date.getDate()

        if(month < 0 || month == 0 && day < 0){
            age -= 1
        }

        return age
    },
    date(timestamp){
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            year,
            month,
            day,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    grade: function(ano){
        switch(ano){
            case 'fund5':
                return '5° ano - Ensino Fundamental'
                break
            case 'fund6':
                return '6° ano - Ensino Fundamental'
                break
            case 'fund7':
                return '7° ano - Ensino Fundamental'
                break
            case 'fund8':
                return '8° ano - Ensino Fundamental'
                break
            case 'fund9':
                return '9° ano - Ensino Fundamental'
                break
            case 'medio1':
                return '1° ano - Ensino Médio'
                break
            case 'medio2':
                return '2° ano - Ensino Médio'
                break
            case 'medio3':
                return '3° ano - Ensino Médio'
                break
            default:
                break
        }
    }
}



           