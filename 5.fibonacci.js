//? Realiza un algoritmo que dibuje la sucesión de Fibonacci hasta la posición que el usuario ingrese.

//* Ejemplo: Si n = 7, se debe mostrar en pantalla la siguiente serie: 0 1 1 2 3 5 8

function fibonacci() {
    let posicion = prompt("Inserta un número de posición para la secuencia: ");
    let secuencia = [];
    
    for (let i = 0; i <= (posicion  - 1) ; i++) {
        let resultado = (i <= 1) ? i : secuencia[i - 1] + secuencia[i - 2];
        secuencia.push(resultado);
    }
    return secuencia.join(' ');
}

console.log(fibonacci());