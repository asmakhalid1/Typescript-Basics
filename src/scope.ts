//Global
var globalVar = "I am a var in global scope";
let globalLet = "I am a let in global scope";
const globalConst = "I am a const in global scope";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

function testGlobal(){
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}
testGlobal();

//function scope
function functionScopeExample(){
    var functionVar = "I am a var in function scope";
    console.log(functionVar);
}
//console.log(functionVar); //ERROR

//block scope
if(true){
    var blockVar = "I am a var in block scope";
    let blockLet = "I am a let in block scope";
    const blockConst = "I am a const in block scope"
    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
}
console.log(blockVar); //Works because var has function scope
//console.log(blockLet); // ERROR: Let has block scope
//console.log(blockConst); // ERROR: const has block scope