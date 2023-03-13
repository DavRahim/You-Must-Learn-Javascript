const products = [
    {id:1, name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {id:2, name: 'phone', price: 7000, brand: 'I phone', color: 'golden'},
    {id:3, name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {id:5, name: 'sungalss', price: 300, brand: 'ray', color: 'black'},
    {id:6, name: 'camera', price: 100000, brand: 'canon', color: 'gray'}
];

//1. map hosce je jinish ta nibo oita niya ekta array return korbe;
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price)
// console.log(prices);

// 2. foreach kono kiso return korbe na
// products.forEach(product => console.log(product.color));
products.forEach(product =>{

})

//3.filter 
// filter e ekta sorto dite hoi jara oi sortu ta fill up korbe sudu marto oi gola niya  ekta array return korbe 
const cheap = products.filter(product => product.price <= 5000);
// je product golo price 5000 taka kom sei product gola daw
// console.log(cheap);



const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName)


//4. find;

const special = products.find(p => p.name.includes('n'));
console.log(special)
