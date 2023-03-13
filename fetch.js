//JSON  => stringify, parse
const student = {
    name: 'shakin khan',
    age: 54,
    movies: ["king khan", "Dhaka" ]
}

const studentJSON = JSON.stringify(student);
const studentObject = JSON.parse(studentJSON);

//2. fetch

fetch("url")
   .then(res => res.json())
   .then(data => console.log(data));

   
// object Keys, values
const Keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 45, 23, 4, 4];

numbers.forEach(num => console.log(num));
const division = numbers.map(num => num / 2)

//for of on array like object;
//loop on an object using for in ;


// add or remove form an array
const products = [
    {id:1, name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {id:2, name: 'phone', price: 7000, brand: 'I phone', color: 'golden'},
    {id:3, name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {id:5, name: 'sungalss', price: 300, brand: 'ray', color: 'black'},
    {id:6, name: 'camera', price: 100000, brand: 'canon', color: 'gray'}
];


const newProduct = {id: 7, name: 'webcam', price: 700, brand: 'lal'};

//copy products array and than add new product;

const newProducts = [...products, newProduct];

//create a new array without one specific item;
// remove phone means create a new array without the array  
const remaining  = products.filter(product => product.name !== 'phone');
console.log(remaining)






