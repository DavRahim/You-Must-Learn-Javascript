//JHoe to declare a Variable using let and const
const fatherName = 'mohammud';
let season  = 'rainy';
season = 'winter';

//2. condition must
// 6 basic condition >, <, ===, !==, <=, >=
//multiple condition : &&, ||
if(fatherName === 'mohammud' || season === 'rainy'){

}
else if(fatherName === 'Mohammud'){

}
else{

}

//3. array;
//index 
//length, push, pop


const numbers = [89, 40, 401, 99];
number[0] = 56;

//4.for loop;

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i]
}


//5. function

function multiply(num1, num2){
    const result = num1 * num2
    return result
}

const output = multiply(70, 7);

//6. object;
//3 way to access property by name
const student = {
    name: 'shakin khan',
    age: 54,
    movies: ["king khan", "Dhaka" ]
}

console.log(student.age); //direct by property
console.log(student["movies"]); //access via property name string 

const ages = 'age';
console.log(student[ages])// access via property name in a variable;



