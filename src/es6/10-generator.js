
function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['Ernesto', 'David', 'Oscar', 'Ana', 'Ulises']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);




//Tu tarea será proveer de una función getId() que se encargue de generar dichos identificadores y, a través 
//de un método .next() se pueda pasar al siguiente identificador, y a través de la propiedad .value se pueda os
//btener el valor del nuevo identificador.

//Cada vez que llame a la función la siguiente forma debería retornarme un identificador nuevo y completamente diferente

export function* getId() {
    // Tu código aquí 👈
    while (true) {
      yield Math.random().toString(36).substring(5).toUpperCase()
      // Se utiliza .toString(36) de acuerdo a la base sexagecimal convirtiendo el numero random en letras y numeros
      // .substring(5) para agarrar a partir del quinto elemento de izquierda a derecha (se puede usar a partir del 2)
      // .toUpperCase() nos ayuda a convertir todas las letras y numero en mayusculas
    }
  }