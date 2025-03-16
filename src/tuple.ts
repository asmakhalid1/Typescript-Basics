let personalDetail:[string,number] = ["Cindy", 30]; //tuple
let personalDetail1:any = ["Kate, 33"]; // array with type any
console.log(personalDetail);
console.log(personalDetail1);
personalDetail1[0] = 8; //cannot change the type of the first element in the tuple