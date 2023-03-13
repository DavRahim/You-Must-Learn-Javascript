
const numbers = [89, 40, 401, 99];
const student = {
    name: 'shakin khan',
    age: 54,
    movies: ["king khan", "Dhaka" ]
}

//1. template string ;
const about = `My name is ${student.name}.age of ${student.age} has number ${numbers[2]} also like movies ${student.movies[1]}`;

//2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEvent = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) =>{
    const sum = num1 + num2
    return sum;
}

// spread operator;

const newNumbers = [...numbers]
// create a new array from an older array and an element;
const currentNumber = [...numbers, 444] ;

numbers.push(77)
console.log(newNumbers)
console.log(numbers);
console.log(currentNumber)
