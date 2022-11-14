let numberArray = [10, 15, 64, 44, 53];
for (let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i]);
}
let stringArray = ['valores', 'de', 'array', 'de', 'strings'];
for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
}
const iterableArray = ['valores', 'de', 'array', 'de', 'strings', 10, 15, 64, 44, 53];
for (const value of iterableArray) {
    console.log(value);
}
let mutableArray = ['valores', 'de', 'array', 'de', 'strings', 10, 15, 64, 44, 53, 'valores', 'de', 'array', 'de', 'strings', 10, 15, 64, 44, 53];
console.log(mutableArray);
mutableArray.shift();
console.log(mutableArray);
mutableArray.pop();
console.log(mutableArray);
mutableArray.unshift('primer index');
console.log(mutableArray);
mutableArray.push('ultimo index');
console.log(mutableArray);
for (let i = 0; i < mutableArray.length; i++) {
    console.log(mutableArray[i]);
}
mutableArray.splice(4, 1, 'valor actualizado');
console.log(mutableArray);
