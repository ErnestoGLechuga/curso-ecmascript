//enhaced object literals

function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser('Tuercas', 32, "MX", 1));