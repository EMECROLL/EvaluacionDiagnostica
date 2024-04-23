//? Se genera una palabra aleatoria (oculta al usuario) y el usuario debe ingresar letra por letra para intentar adivinar la palabra, se debe validar que las letras coincidan con la posición de las letras de la palabra generada. 
//* Máximo 5 errores.

const palabras = [
    "ozelot",
    "javascript",
    "programacion",
    "computadora",
    "desarrollo",
    "tecnologia",
];

function seleccionarPalabra() {
    const indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}

function ahorcado() {
    const palabraSecreta = seleccionarPalabra();
    const letrasPalabraSecreta = palabraSecreta.split('');
    const letrasAdivinadas = new Array(letrasPalabraSecreta.length).fill('_');
    let intentosRestantes = 5;
    const letrasIncorrectas = [];

    console.log("Bienvenido al Juego del Ahorcado!");
    console.log(`La palabra tiene ${palabraSecreta.length} letras.`);

    while (intentosRestantes > 0 && letrasAdivinadas.includes('_')) {
        console.log("\nPalabra:", letrasAdivinadas.join(' '));
        console.log(`Intentos restantes: ${intentosRestantes}`);
        console.log("Letras incorrectas:", letrasIncorrectas.join(' '));

        const letraIngresada = prompt("Ingresa una letra:").toLowerCase();

        if (letrasIncorrectas.includes(letraIngresada) || letrasAdivinadas.includes(letraIngresada)) {
            console.log("Ya has intentado con esa letra. Intenta con otra.");
            continue;
        }

        let acierto = false;

        for (let i = 0; i < letrasPalabraSecreta.length; i++) {
            if (letrasPalabraSecreta[i] === letraIngresada) {
                letrasAdivinadas[i] = letraIngresada;
                acierto = true;
            }
        }

        if (!acierto) {
            letrasIncorrectas.push(letraIngresada);
            intentosRestantes--;
        }
    }

    if (!letrasAdivinadas.includes('_')) {
        console.log(`\nHas adivinado la palabra: ${palabraSecreta}`);
    } else {
        console.log("\nTe has quedado sin intentos");
        console.log(`La palabra era: ${palabraSecreta}`);
    }
}

ahorcado();