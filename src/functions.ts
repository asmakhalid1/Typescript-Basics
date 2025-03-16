function greeting(){
    console.log("I am a function.");
}
greeting();

function greeting1(studentName:string){
    console.log(`Hi ${studentName}`);
}

greeting1("Atul");

function add(a:number, b:number){
    return a+b;
}

console.log(add(1,2));

function greeting2(studentName:string = "Vignesh", location?:string){
    console.log(`Hi ${studentName} joining from ${location}`);
}
greeting2();
greeting2("Nithin", "Kerala");
