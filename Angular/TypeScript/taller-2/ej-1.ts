// ● Cree una función con un paraḿetro opcional tipo boolean, uno por defecto tipo string, y uno obligatorio de
// tipo number. Haga el llamado a la función.
const params = ( count:number, thing:string='producto', exist?:boolean):string => {
  if(exist){
    return `el producto ${thing} tiene ${count} en existencia`;
  }
  return `hay ${count} del producto ${thing}`
}

console.log(params(15, 'cama',true));


// ● Cree una variable tipo función que tenga como parámetros dos números y retorne su suma, haga el
// llamado a la función.
const suma = function(num1:number, num2:number):number{
  return num1+num2;
}

console.log(suma(5,5));


// ● Use setTimeOut para implementar un callback que se llame a los 5 segundos e imprima por consola el
// mensaje “HOLA ADSI”
function saludar(ficha:number):any{
  console.log(`HOLA ADSI ${ficha}`)
}

setTimeout(function(){saludar(2448515)}, 5000)

// ● Cree una función flecha sin argumentos que imprima “Hola ADSI”.
const hiAdsi = ():any =>{
  console.log('HOLA ADSI')
}

hiAdsi();

// ● Cree una función flecha que tenga como parámetro edad y retorne un string que le diga al usuario cuál
// fue la edad pasada como argumento, imprima el valor devuelto por la función. Use paréntesis para el
// parámetro y omita la palabra reservada return.
const edad=(age:number):string=> `la edad del usuario es ${age}`
console.log(edad(18));


// ● Cree una función flecha que tenga como parámetros dos números y retorne el producto de éstos,
// imprima el valor devuelto por la función. Use paréntesis para agrupar los parámetros, no use la palabra
// reservada return.
const producto =(first:number, second:number):number=> first/second;
console.log(producto(15, 8));


// ● Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima
// el valor devuelto por la función. La función debe tener dos instrucciones, una donde se declare e inicialice
// la variable módulo que contendrá el módulo de los dos números y la otra donde se retorne la variable
// módulo. Use paréntesis para agrupar los parámetros, use llaves para agrupar las dos instrucciones.
const modulo = (first:number, second:number):number=>{
  const modulo:number = first%second;
  return modulo;
}

console.log(modulo(15, 0.497));

// ●investigue desestructuracion de objetos y de arreglos e implementelos.
const persona = {
  ojos: 'negros',
  cara: 'ovalada',
  altura: 194,
  peso: 86,
  contextura: 'delgado',
  tes:'blanca'
}

const {ojos, cara, altura, peso, contextura, tes} = persona;

console.log(`es de ojos ${ojos}, con una cara ${cara}, mide ${altura}cm, pesa ${peso} kg, es de contextura ${contextura} y de tes ${tes}`);

const vehiculo = {
  marca: 'toyota',
  modelo: 'GR Yaris',
  salida: 2021,
  motor: '1.6 L turbo de 3 cilindros',
  interior: 'deportivo'
}

const {marca, modelo, salida, motor, interior} = vehiculo;

console.log(`el vehiculo es de la marca ${marca}, del modelo ${modelo}, salio en el año ${salida}, cuenta con un motor de ${motor} y el interior es ${interior}`);

const edificio = {
  color: 'gris',
  ventanas: 'polarizadas',
  pisos: 20,
  año: 1984,
  ocupacion: 'empresa de software'
}

const {color, ventanas, pisos, año, ocupacion} = edificio;

console.log(`El edificio es de color ${color}, con ${pisos} pisos y ventanas ${ventanas}. fue construido en el año ${año} y actualmente lo ocupa una ${ocupacion}`);

const enteros:Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const [one, two, three, four, five, six, seven, eight, nine, ten] = enteros;

console.log(`los numeros enteros son ${one}, ${two}, ${three}, ${four}, ${five}, ${six}, ${seven}, ${eight}, ${nine}, ${ten}`);

const partesPC:Array<string> = ['monitor', 'tarjeta madre', 'gpu', 'cpu', 'fuente', 'ram', 'rom'];

const [first, second, third, fouth, fifth, sixth, seventh] = partesPC;

console.log(`la PC cuenta con los siguentes componentes: ${first}, ${second}, ${third}, ${fouth}, ${fifth}, ${sixth}, ${seventh}`);

const comida:Array<string> = ['arroz', 'carne','lentejas', 'pollo', 'frijoles', 'platanos']

const [uno, dos , tres, cuatro, cinco, seis] =comida;

console.log(`en la casa hay : ${uno}, ${dos} , ${tres}, ${cuatro}, ${cinco}, ${seis}`);
