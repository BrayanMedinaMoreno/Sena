// ● Una variable tipo objeto cuyos valores sean los días de la semana
const weekDays = {
  firstDay: "lunes",
  secondDay: "martes",
  thirdDay: "miercoles",
  forthDay: "jueves",
  fifthDay: "viernes",
  sixthDay: "sabado",
  seventhDay: "domingo",
};

// ● Una variable tipo objeto cuyos valores sean los números del 0 al 9
const numbers = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

// ● Recorra cada objeto creado usando for-in e imprimiendo cada uno de sus valores
let days = Object.values(weekDays);
for (let day in weekDays) {
  console.log(weekDays[day]);
}

for (let number in numbers) {
  console.log(number);
}

// Investigue: cómo eliminar elementos clave-valor de un objeto, cómo leer y actualizar valores. Implemente ejemplos prácticos.
//eliminar

delete weekDays.firstDay;
console.log(weekDays);


// Investigue: Ciclos for y while en TypeScript. Implemente ejemplos prácticos

for (let i: number = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else {
      console.log("fizz");
    }
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

let whileIterable: number = 0;
const random: number = Math.round(Math.random() * 1000);
while (whileIterable <= random) {
  if (random - whileIterable == 0) {
    console.log("pasos:", whileIterable);
    whileIterable += 1;
  } else {
    console.log(`a ${random - whileIterable} del final`);
    whileIterable += 1;
  }
}
