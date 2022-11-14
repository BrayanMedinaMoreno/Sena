/*Parametro opcional */
const function1 = (n?:boolean) => {
  console.log(n+"-----------opcional");
}
function1(false);

/*Parametro por defecto */
const function2 = (E="It's String") => {
  console.log(E)+"Parametro defecto";
}

function2()
/*Parametro Obligatorio */
const function3 = (N:number)=>{
  console.log(N+"Obligatorio Parametro");
}
function3(2);

/*Suma con parametros */
var Sum = (a:number,b:number) => {
  console.log(a+b+"Suma Parametros");
}
Sum(1,2);

/*SetTimeOut Callback */
const string = () => {
  console.log("Hola ADSI------SetTimeOut");
}
const TimeOut = setTimeout(string,5000);

/*Funcion Flecha */
const Arrow = () => {
  console.log("Hola ADSI-----Funcion Flecha");
}
Arrow();

/*Flecha Con Argumento Edad */
const ArrowAge = (Age?:number) => {
  console.log(`Señor Usuario su Edad es: ${Age}----Argumento Arrow Edad`);
}
ArrowAge(19)

/*Producto Arrow */
const ArrowProduct = (A:number,B:number)=> {
  console.log(A*B+"ArrowProduct");
}
ArrowProduct(5,2)

/*Arrow Module*/
const ArrowModule =(A:number,B:number) => {
  let Result:number=A%B;
  console.log(Result+"Modulo"); 
}
ArrowModule(2,10);

console.log("------------------Desestructuracion Object 3 ejemplos-------------");

let number1, number2, rest;
[number1, number2] = [10, 20];
console.log(number1); 
console.log(number2); 

[number1, number2, ...rest] = [10, 20, 30, 40, 50];
console.log(number1); 
console.log(number2); 
console.log(rest); 

({ number1, number2} = { number1: 10, number2: 20 });
console.log(number1); 
console.log(number2); 
console.log("---------------------------------------------------------------------");

console.log("--------------------------Desestructuracion Array 3 ejemplos-------------------");

let Ejemplo:string[]=["One","Two","Three"]
let [one,two,three]=Ejemplo
console.log(one);
console.log(two);
console.log(three);



console.log("----------------------------------------------------------------------");


