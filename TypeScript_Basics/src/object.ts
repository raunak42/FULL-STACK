let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "Raunak",
    retire: (date: Date) => {
        console.log(date)
    }
};

employee.name = "Rishi";
//employee.id = 8;

console.log(employee);

