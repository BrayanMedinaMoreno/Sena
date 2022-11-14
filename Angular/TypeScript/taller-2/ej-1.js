"use strict";
const params = (count, thing = 'producto', exist) => {
    if (exist) {
        return `el producto ${thing} tiene ${count} en existencia`;
    }
    return `hay ${count} del producto ${thing}`;
};
console.log(params(15, 'cama', true));
const suma = function (num1, num2) {
    return num1 + num2;
};
console.log(suma(5, 5));
function saludar(ficha) {
    console.log(`HOLA ADSI ${ficha}`);
}
setTimeout(function () { saludar(2448515); }, 5000);
const hiAdsi = () => {
    console.log('HOLA ADSI');
};
hiAdsi();
const edad = (age) => `la edad del usuario es ${age}`;
console.log(edad(18));
const producto = (first, second) => first / second;
console.log(producto(15, 8));
const modulo = (first, second) => {
    const modulo = first % second;
    return modulo;
};
console.log(modulo(15, 0.497));
const persona = {
    ojos: 'negros',
    cara: 'ovalada',
    altura: 194,
    peso: 86,
    contextura: 'delgado',
    tes: 'blanca'
};
const { ojos, cara, altura, peso, contextura, tes } = persona;
console.log(`es de ojos ${ojos}, con una cara ${cara}, mide ${altura}cm, pesa ${peso} kg, es de contextura ${contextura} y de tes ${tes}`);
const vehiculo = {
    marca: 'toyota',
    modelo: 'GR Yaris',
    salida: 2021,
    motor: '1.6 L turbo de 3 cilindros',
    interior: 'deportivo'
};
const { marca, modelo, salida, motor, interior } = vehiculo;
console.log(`el vehiculo es de la marca ${marca}, del modelo ${modelo}, salio en el año ${salida}, cuenta con un motor de ${motor} y el interior es ${interior}`);
const edificio = {
    color: 'gris',
    ventanas: 'polarizadas',
    pisos: 20,
    año: 1984,
    ocupacion: 'empresa de software'
};
const { color, ventanas, pisos, año, ocupacion } = edificio;
console.log(`El edificio es de color ${color}, con ${pisos} pisos y ventanas ${ventanas}. fue construido en el año ${año} y actualmente lo ocupa una ${ocupacion}`);
const enteros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const [one, two, three, four, five, six, seven, eight, nine, ten] = enteros;
console.log(`los numeros enteros son ${one}, ${two}, ${three}, ${four}, ${five}, ${six}, ${seven}, ${eight}, ${nine}, ${ten}`);
const partesPC = ['monitor', 'tarjeta madre', 'gpu', 'cpu', 'fuente', 'ram', 'rom'];
const [first, second, third, fouth, fifth, sixth, seventh] = partesPC;
console.log(`la PC cuenta con los siguentes componentes: ${first}, ${second}, ${third}, ${fouth}, ${fifth}, ${sixth}, ${seventh}`);
const comida = ['arroz', 'carne', 'lentejas', 'pollo', 'frijoles', 'platanos'];
const [uno, dos, tres, cuatro, cinco, seis] = comida;
console.log(`en la casa hay : ${uno}, ${dos} , ${tres}, ${cuatro}, ${cinco}, ${seis}`);
