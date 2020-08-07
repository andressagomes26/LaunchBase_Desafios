module.exports = {
    age: function(timestamp){
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
    date: function(timestamp){
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }
}