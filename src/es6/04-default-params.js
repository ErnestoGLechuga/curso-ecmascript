function newUser(name, age, country){
    var name = name || 'Ernesto';
    var age = age || 30;
    var country = country || 'Mexico';
    console.log(name, age, country);
}

newUser();
newUser('Juan', 20, 'USA');

function newAdmin(name = 'Oscar', age = 30, country = 'CO'){
    console.log(name,age,country);
}
newAdmin();
newAdmin('Ana', 28, 'PE');