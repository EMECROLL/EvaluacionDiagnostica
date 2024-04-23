//? Realizar un algoritmo que permita generar contraseñas aleatorias con los requerimientos proporcionados:
//* (longitud mínima de 8 caracteres, al menos una letra mayúscula, un carácter especial y un número.)

function generadorContrasenia(){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    const longitud = 8;
    let contrasenia = '';

    function obtenerCaracterAleatorio() {
        return caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    while (contrasenia.length < longitud) {
        contrasenia += obtenerCaracterAleatorio();
    }

    let tieneMayuscula = /[A-Z]/.test(contrasenia);
    let tieneCaracterEspecial = /[^A-Za-z0-9]/.test(contrasenia);
    let tieneNumero = /[0-9]/.test(contrasenia);

    if (!tieneMayuscula) {
        contrasenia = contrasenia.replace(/[a-z]/, obtenerCaracterAleatorio().toUpperCase());
    }
    if (!tieneCaracterEspecial) {
        contrasenia = contrasenia.replace(/[a-zA-Z0-9]/, obtenerCaracterAleatorio());
    }
    if (!tieneNumero) {
        contrasenia = contrasenia.replace(/[a-zA-Z]/, obtenerCaracterAleatorio());
    }

    return contrasenia;
}

console.log(generadorContrasenia());