let fruits = ["apple", "orange", "banana"];
const numberArray = new Array(1,2,3,4,5);
console.log(fruits);
console.log(numberArray);
console.log(fruits[1]);
fruits[1] = "strawberry";
console.log(fruits[1]);

numberArray.push(6);
console.log(numberArray);

numberArray.pop();
console.log(numberArray);

numberArray.unshift(0);
console.log(numberArray);

numberArray.shift();
console.log(numberArray);

let sliceArray = numberArray.slice(1,4);
console.log(sliceArray);

const filterArray = numberArray.filter(num=>num>2);
console.log(filterArray);
