
const enum Sizes { small = 7, medium, large };
const enum Velocities { slow, medium, fast };
const enum Lengths { l1, l2, l3 };

//console.log({Sizes, Velocities, Lengths})

let myVelocity: Velocities = Velocities.fast;
console.log(myVelocity)
//////////////////////////////////////////////////////////////////////////

enum Arithmetic {
    Add,
    Sub,
    Div,
    Mul
};
function calculate(a: number, b: number, operation: Arithmetic) {
    Arithmetic.Add
    return 1;
}

const ans = calculate(1, 2, Arithmetic.Mul);
console.log(ans)