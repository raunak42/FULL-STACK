interface Circle {
    radius: number
};

interface Square {
    side: number
};

interface Rectangle {
    length: number;
    breadth: number;
};

type Shape = Circle | Rectangle | Square;

function renderShape(shape: Shape) {
    console.log("Rendered!")
}

function calculateArea(shape: Shape) {
    console.log("Calculated area")
}

renderShape({
    radius: 10
})