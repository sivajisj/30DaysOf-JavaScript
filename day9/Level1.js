// let num = [1,2,3,4,56,678,45,44]
// const h =num.map((e)=> e*4);
// console.log(h);
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// countries.forEach((e)=>  console.log(e));
// names.forEach((e)=>  console.log(e));
// numbers.forEach((e)=>  console.log(e));
// countries.map((e)=> console.log(e.toUpperCase())
// countries.map((e)=> console.log(e.length))
// names.map((e)=>console.log(e.toUpperCase()))
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// const p=products.map((p)=>p.price)
// const p = countries.filter((e)=>(e.toLowerCase()).includes("lan"))
// const p = products.filter((e)=>   typeof e.price != 'string')
// let a = [1, 2 , , 'sdf', 234];
// const p =numbers.reduce((e,c)=> e+c)
const p =names.findIndex ((e)=> e.length===7)

console.log(p);