/*Diferencia entre Const, Var y Let*/

/*Const Ejemplo*/ 

const NumberXD:Number=18;
console.log(`Valor Constante: ${NumberXD}`);

/*Const es una Variable constante que no se puede cambiar su valor por otro */

var NumberVar=19

console.log(`Valor Var sin Modificar: ${NumberVar}`);
NumberVar=20
console.log(`Valor Var Modificado: ${NumberVar}`);

/*La variable Var es un valor global en todo el codigo*/

if (NumberVar==20) {
  let NumberLet=21;

  console.log(`Valor Let sin Modificar: ${NumberLet}`);

  NumberLet=22;

  console.log(`Valor Let Modificado: ${NumberLet}`);
}

/*La variable Let es un valor local de una función que solo se ejecuta en la función que esta metida */

/*Variables logicos */

let FirstLogic:Boolean=true;
let SecondLogic=false;

/* Variables numericos */

let FistNumber=1;
let SecondNumber=2;

/*Variables Any */

let FirstAnyA:any="First Log Any";
let SecondAny:any=true;

/*Variables String */

let FirstString="First Log String";
let SecondString="Second Log String";

/*Nombres */
let Firstname:string="Gian";
let SecondName:string="Rios";

const Register=()=>{
  const Mensaje= `Bienvenid@ ${Firstname} ${SecondName} a nuestro sitio web, gracias por registrarte`;
  console.log(Mensaje);
}

Register();

/*Arrays Number */
let ArrayNumber=[
  1,2,3,4,5
]
console.log("ArrayNumber");
for (let i = 0; i < ArrayNumber.length; i++) {

  
  const element = ArrayNumber[i];
  console.log(element);
}

/*Array Strings */

let ArrayString:String[]=[
  "first",
  "second",
  "three",
  "four",
  "five"
]
console.log("ArrayString");
for (let o = 0; o < ArrayString.length; o++) {
  
  
  const elementString = ArrayString[o];
  console.log(elementString);
}


/*For of */

for (const Value of ArrayNumber) {
  console.log(Value); 
}

for (const Values of ArrayString) {
  console.log(Values);
}

let ArraysModified:string[] =[
  "FirstString",
  "SecondString",
  "ThreeString",
  "FourString",
  "FiveString",
  "SixString"
]
for (const Value of ArraysModified) {
  console.log(Value); 
}
/*Modificar Valor Array*/
ArraysModified[1]="Hello World!";

/*Agregar valor a un array  */
ArraysModified.push("SevenString");

/*Eliminar el ultimo valor de un array */
ArraysModified.pop();

/*Eliminar el primer valor de un array*/
ArraysModified.shift();
console.log("--------------------------------------------------------");

for (const Value of ArraysModified) {
  console.log(Value); 
}

const DayWeakend:any={
  FirstDay:"lunes",
  SecondDay:"Martes",
  ThirdDay:"Miércoles",
  FourthDay:"Jueves",
  FiveDay:"Viernes",
  Sixday:"Sabado",
  SeventhDay:"Domingo"
}
/*Objects de numeros y caracteres */
const Random:any={
  One:1,
  Two:2,
  Three:3,
  four:4,
  five:5,
  six:6,
  seven:7,
  eight:8,
  nine:9
}

/*For in De los dos Objectos */
for (const key in DayWeakend) {
  if (Object.prototype.hasOwnProperty.call(DayWeakend, key)) {
    const element = DayWeakend[key];
    console.log(element);
  }
}
console.log("____________________________________________________________");

for (const KeyRandom in Random) { {
  if (Object.prototype.hasOwnProperty.call(Random, KeyRandom)) {
    const elementNumber = Random[KeyRandom];
    console.log(elementNumber);
    
    }
  }
}

/*Reading Objects in typeScript*/
console.log(DayWeakend);
/*Modified Value in Object TypeScript*/
Random.One=10;
/*Delete Value of Object Ts*/
delete Random.Two;
/*Add value in Object Ts*/
Random.ten=10;
console.log(Random);


/*Ciclos For and While*/
/*The Example is Arrays random*/

const arr = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [1,2,3,4,5,6,7,8,9,10,11];

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  
}

while (arr2.length >arr.length) {
  console.log(`XD`);
}