//? Realizar un algoritmo que calcula la edad de una persona. 
//? El usuario debe ingresar su año de nacimiento, día y hora.

function calcularEdadExacta() {

    let fechaActual = new Date();
    let anioActual = fechaActual.getFullYear();
    let mesActual = fechaActual.getMonth() + 1;
    let diaActual = fechaActual.getDate();
    let horaActual = fechaActual.getHours();

    let anioNacimiento = prompt("Ingrese su año de nacimiento:");
    let mesNacimiento = prompt("Ingrese su mes de nacimiento (1-12):");
    let diaNacimiento = prompt("Ingrese su día de nacimiento (1-30):");
    let horaNacimiento = prompt("Ingrese su hora de nacimiento (0-23):");

    const milisegundosPorSegundo = 1000;
    const segundosPorMinuto = 60;
    const minutosPorHora = 60;
    const horasPorDia = 24;

    const milisegundosPorHora = milisegundosPorSegundo * segundosPorMinuto * minutosPorHora;

    let fechaNacimiento = new Date(anioNacimiento, mesNacimiento - 1, diaNacimiento, horaNacimiento);

    let edadAnios = anioActual - anioNacimiento;
    let edadMeses = mesActual - mesNacimiento;
    let edadSemanas = Math.floor((fechaActual - fechaNacimiento) / (7 * milisegundosPorHora));
    let edadDias = Math.floor((fechaActual - fechaNacimiento) / (milisegundosPorHora * horasPorDia));
    let edadHoras = Math.floor((fechaActual - fechaNacimiento) / milisegundosPorHora);

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edadAnios--;
        edadMeses += 12;
    }

    if (diaActual < diaNacimiento) {
        edadSemanas--;
        edadDias = diaActual + (30 - diaNacimiento); 
    }

    if (horaActual < horaNacimiento) {
        edadDias--;
        edadHoras = horaActual + (24 - horaNacimiento);
    }

    return `Su edad es de ${edadAnios} años, ${edadMeses} meses, ${edadSemanas} semanas, ${edadDias} dias, ${edadHoras} horas.`
}

console.log(calcularEdadExacta());