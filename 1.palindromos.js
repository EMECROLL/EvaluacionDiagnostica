//? Realizar un sencillo algoritmo para validar si una palabra es un palíndromo, el usuario debe ingresar una palabra y se le retorna un mensaje de valido o invalido.
//? Un palíndromo es una palabra o frase que se lee igual en un sentido que en otro. 

//* Ejemplos: reconocer, sometemos, amor a Roma, la ruta natural

function verificarPalindromo() {
    let palabraUsuario = prompt("Ingresa una palabra:");
    let palabraLimpia = palabraUsuario.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let palabraInvertida = palabraLimpia.split("").reverse().join("");

    return palabraInvertida === palabraLimpia ? "Valido" : "Invalido";
}

console.log(verificarPalindromo());