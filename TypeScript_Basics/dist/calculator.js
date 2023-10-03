"use strict";
function calculator1(x, y, operation) {
    return operation(x, y);
}
;
function add(x, y) {
    return x + y;
}
;
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function mod(x, y) {
    return x % y;
}
let sum = calculator1(4, 5, add);
let diff = calculator1(4, 5, sub);
let prod = calculator1(4, 5, mul);
let quo = calculator1(4, 5, div);
let remiander = calculator1(4, 5, mod);
function calculator2(x, y, operation) {
    if (operation === "add") {
        return x + y;
    }
    if (operation === "sub") {
        return x - y;
    }
    if (operation === "mul") {
        return x * y;
    }
    if (operation === "div") {
        return x / y;
    }
    if (operation === "mod") {
        return x % y;
    }
    else {
        return -8888;
    }
}
;
let sum2 = calculator2(6, 7, "add");
let diff2 = calculator2(6, 7, "sub");
let prod2 = calculator2(6, 7, "mul");
let quo2 = calculator2(6, 7, "div");
let remiander2 = calculator2(6, 7, "mod");
function calculator3(x, y, operation) {
    if (operation === "add") {
        return x + y;
    }
    if (operation === "sub") {
        return x - y;
    }
    if (operation === "mul") {
        return x * y;
    }
    if (operation === "div") {
        return x / y;
    }
    if (operation === "mod") {
        return x % y;
    }
    else {
        return -8888;
    }
}
;
const sum3 = calculator3(3, 5, "add");
const diff3 = calculator2(6, 7, "sub");
const prod3 = calculator2(6, 7, "mul");
const quo3 = calculator2(6, 7, "div");
console.log("result_2:", { sum2, diff2, prod2, quo2, remiander2 });
//# sourceMappingURL=calculator.js.map