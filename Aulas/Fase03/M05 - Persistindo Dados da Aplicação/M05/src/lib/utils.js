module.exports = {
    // Retorna a idade
    age(timestamp){
        const today = new Date()
        const birth = new Date(timestamp)

        let age = today.getFullYear() - birth.getFullYear()
        const month = today.getMonth() - birth.getMonth()
        const day = today.getDate() - birth.getDate()

        if(month < 0 || month == 0 && day <=0 ){
            age -= 1
        }

        return age
    },
    // Retorna a data de nascimento organizada
    date(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return{
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        } 
    }

}