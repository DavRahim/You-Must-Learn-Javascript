//false
// "", 0, false, null, undefined, 
//true 
// "alms", 3, true, {}, []

let myVar = 5;

if(myVar){
    myVar = myVar * 100
}
else{
    myVar = 0;
}

let myMony = 50;
// you check negative or falsy anything
if(!myMony){

}

const money = 90;
let food;
if(money > 100){
    food = 'badam';
}
else{
    food = 'biscuit'
}

// ternary oparator;

let food1 = money > 100 ? 'badam' : 'cha';


// shortcut
// number to string conversion
const num3 = 53;
const numStr = num3 + "";

// string to number
const input  = '50'
const inputNUm = +input;


//sutro sapakhe result
const isActive = true ;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

isActive ? showUser() : hideUser();
//use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed;
isActive || hideUser();


//toggle boolen
isActive = !isActive;
