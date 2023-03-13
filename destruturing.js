// array destructuring
const numbers = [43, 65];

// const [x, y] = [43, 65]
const [x, y] = numbers;
function boxify(num1, num2){
    const nums = [num1, num2];
    return nums
}

// console.log(boxify(60, 60))

const student = {
    name: 'shakin khan',
    age: 54,
    movies: ["king khan", "Dhaka" ]
}


const [firstMovie, secondMovie] = student.movies;

//object destructuring;
const {name, age}= {name: 'alu', age: 14};


const employee = {
    ide: 'VS code',
    designation: 'Developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification:{
        height: 66,
        weight: 50,
        address: 'Dhaka',
        drink: 'water',
        watch:{
            color: 'black',
            price: 500,
            brand: 'green'
        }

    }
}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
//optional chaneing 
const {brand} = employee?.specification?.watch