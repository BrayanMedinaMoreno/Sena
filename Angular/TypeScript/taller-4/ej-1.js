"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const square = (number) => __awaiter(void 0, void 0, void 0, function* () {
    const result = number ** 2;
    return result;
});
console.log(square(5));
const resultado = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((resolve, reject) => {
        setTimeout(() => {
            const operation = 2 * Math.sqrt(2 * 2);
            resolve(operation);
        }, 6000);
    }).then((res) => {
        return Number(res);
    });
});
console.log(resultado());
const cuadradoAsincrono = () => __awaiter(void 0, void 0, void 0, function* () {
    const number = yield resultado();
    const formatting = Number(number);
    const result = formatting ** 2;
    console.log(result);
    return result;
});
console.log(cuadradoAsincrono());
