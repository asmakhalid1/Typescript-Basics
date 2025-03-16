//if block
let age1 = 10;
if(age1>= 18){
    console.log("Adult");
}

//if-else block
if(age1>=18){
    console.log("Adult");
}
else{
    console.log("Minor");
}

//if-else-if block
if(age1 >=0 && age1 <=10){
    console.log("child");
}
else if(age1>=11 && age1< 18){
    console.log("adolescent");
}
else if(age1>=18 && age1<65){
    console.log("Adult");
}
else{
    console.log("senior");
}
//Nested if else
if(age1>=0 && age1<=65){
    if(age1 >=0 && age1 <=10){
        console.log("child");
    }
    else if(age1>=11 && age1< 18){
        console.log("adolescent");
    }
    else if(age1>=18 && age1<65){
        console.log("Adult");
    }
}
else{
    console.log("senior");
}