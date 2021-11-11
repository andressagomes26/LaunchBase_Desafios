module.exports = {
    age: function(timestamp){
        const today = new Date()
        const birth = new Date(timestamp)

        const age = today.getFullYear() -  birth.getFullYear()
        const month = today.getMonth() - birth.getMonth()
        const day = today.getDate() - birth.getDate()

        if(month < 0 || month == 0 && day < 0){
            age -= 1
        }

        return age
    },
    graduation: function(value){
        if(value == "EnsinoMedioCompleto"){
            return `Ensino Médio Completo`
        }
        else if(value == "EnsinoSuperiorCompleto"){
            return `Ensino Superior Completo`
        }
        else if(value == "Mestrado"){
            return `Mestrado`
        }
        else if(value == "Doutorado"){
            return `Doutorado`
        }
        else{
            return `Não informado`
        }
    },
    typeClass: function(value){
        if(value == "D"){
            return `À distância`
        }
        else if(value == "P"){
            return `Presencial`
        }
        else{
            return `Não informado`
        }
    },
    date: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)


        return {
            iso:`${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    grade: function(value){
        if(value == "5F"){
            return `5° ano Ensino Fundamental`
        }
        else if(value == "6F"){
            return `6° ano Ensino Fundamental`
        }
        else if(value == "7F"){
            return `7° ano Ensino Fundamental`
        }
        else if(value == "8F"){
            return `8° ano Ensino Fundamental`
        }
        else if(value == "9F"){
            return `9° ano Ensino Fundamental`
        }
        else if(value == "1M"){
            return `1° ano Ensino Médio`
        }
        else if(value == "2M"){
            return `2° ano Ensino Médio`
        }
        else if(value == "3M"){
            return `3° ano Ensino Médio`
        }
        else{
            return `Não informado`
        }
    },
}