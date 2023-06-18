let array = [3,4,6,78,2,88,32,44,5,3,2,2]
console.time("for loop")
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
console.timeEnd("for loop")
console.log("**************************");
console.time("for each loop")
array.forEach(element => {
    console.log(element);
});
console.timeEnd("for each loop")
console.log("**************************");
console.time("for of loop")
for (const iterator of array) {
    console.log(iterator);
}
console.timeEnd("for of loop")
console.log("**************************");

