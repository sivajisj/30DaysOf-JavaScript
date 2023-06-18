const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,4,6,7,8,5,34,3,6,7,3,5,6,6,7,7,7,4,4,43,3,3]
// const p= products.reduce((ele,acu)=>ele+acu.price)
// console.log(p);
// const categorizeCountries = countries.filter(e=>e.includes('land', 'ia', 'island','stan'))
// console.log(categorizeCountries);
// const firstTenLetr = numbers.filter(e=> numbers.indexOf(e)<10)
// console.log(firstTenLetr);
let getFirstTenCountries = arr => arr.filter((e,ac) => arr.length<10);
console.log(getFirstTenCountries);
