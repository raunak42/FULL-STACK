function calculateTax(income: number): number {

    return 2*(Math.sqrt(income));
}

let sex: number = calculateTax(9);
console.log(sex);

