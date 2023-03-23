//arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
console.log(a,fruits[1]);


//object destructuring

let user = {username: 'Ernesto', age: 30};
let {username, age} = user;
console.log(username, age);


// spread operator

let person = {name: 'Ernesto', age: 30};
let country = 'MX'

let data = {...person, country};
console.log(data)


// rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 2, 3, 4,5,6,7,8,9);

function solution(json1 = { name: "Mr. Michi", food: "Pescado" }, json2 = { age: 12, color: "Blanco" }) {
    return { ...json1, ...json2 };
  }
