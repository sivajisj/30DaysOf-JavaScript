let a= [1,2,3,5,7,2,8]
let b = [3,5,1,3,8,9]
const A = new Set(a)
const B = new Set(b)
// console.log(A,B);
// let union = [...A,...B]
// console.log(new Set(union))
const interSection = b.filter((num)=>A.has(num))
console.log(interSection);
