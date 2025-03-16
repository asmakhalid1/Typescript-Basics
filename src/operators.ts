//Arithmetic operators
let a = 20;
let b = 10;

let sum = a+b;
let difference = a-b;
let product = a*b;
let division = a/b; //quotient
let modulus = a%b; //remainder

console.log("a =", a, " b =", b);
console.log("sum =", sum);
console.log("difference =", difference);
console.log("product =", product);
console.log("Quotient =", division);
console.log("Remainder =", modulus);

//Comparison operators
let x = 5;
let y = 10;
let isLooseEqual = x==y; //check only value
let isStrictEqual = x===y; //check both data type and value;
let isNotEqual = x!=y;
console.log(isLooseEqual, isStrictEqual, isNotEqual);
let greaterThan = x>y;
let greaterThanEqualTo = x>=y;
let lessThan = x<y;
let lessThanEqualTo = x<=y;
console.log(greaterThan, greaterThanEqualTo, lessThan, lessThanEqualTo);

//Logical operators
let isTrue = true;
let isFalse = false;
let andResult = isTrue && isFalse;
let orResult = isTrue || isFalse;
let notResult = !isTrue;

//Assignment operators
let num = 5;
num +=5;
num -=3;
num *=3;
num /=3;
num %=3;

//Ternary operator
let age =  10;
let message = age >=18?"Adult":"Minor";
console.log(message);
age = 20;
message = age >=18?"Adult":"Minor";
console.log(message);