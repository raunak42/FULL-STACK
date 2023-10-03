function calculator1(x: number, y: number, operation: (x: number, y: number) => number): number {
    return operation(x, y)
};

function add(x: number, y: number): number {
    return x + y;
};
function sub(x: number, y: number): number {
    return x - y;
}
function mul(x: number, y: number): number {
    return x * y;
}
function div(x: number, y: number): number {
    return x / y;
}
function mod(x: number, y: number): number {
    return x % y;
}

let sum: number = calculator1(4, 5, add);
let diff: number = calculator1(4, 5, sub);
let prod: number = calculator1(4, 5, mul);
let quo: number = calculator1(4, 5, div);
let remiander: number = calculator1(4, 5, mod);

/////////////////////////////////////////////////////////////////////////////////////////
function calculator2(x: number, y: number, operation: string): number {
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
};

let sum2: number = calculator2(6, 7, "add")
let diff2: number = calculator2(6, 7, "sub")
let prod2: number = calculator2(6, 7, "mul")
let quo2: number = calculator2(6, 7, "div")
let remiander2: number = calculator2(6, 7, "mod")
///////////////////////////////////////////////////////////////////////////////////////////

function calculator3(x: number, y: number, operation: "add" | "sub" | "mul" | "div") {
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
};

const sum3: number = calculator3(3, 5, "add")
const diff3: number = calculator2(6, 7, "sub")
const prod3: number = calculator2(6, 7, "mul")
const quo3: number = calculator2(6, 7, "div")
// const remiander3: number = calculator3(6, 7, "mod")
///////////////////////////////////////////////////////////////////////////////////////

// console.log("result_1:", { sum, diff, prod, quo, remiander });
console.log("result_2:", { sum2, diff2, prod2, quo2, remiander2 });
// console.log("result_3:", { sum3, diff3, prod3, quo3 });
