let myDate = new Date();
console.log(myDate); //unusual form can't be use
console.log(myDate.toString());//much better than earlier
console.log(myDate.toISOString());// Date() & ISOString both representation is same.
console.log(myDate.toLocaleDateString());//Only Date.
console.log(myDate.toJSON());//Similar representation to Date() , ISOString
console.log(myDate.toLocaleString());//Date with time
console.log(myDate.toDateString()); //Date with word representation.




let createMyDate = new Date(2026, 0 ,22,21,26);//Months starts with 0 in JS.(********IMP********)
console.log(createMyDate.toLocaleString());//PM or AM will automatically come.

let createNewDate = new Date("2026-02-15");//YY-MM-DD format.
console.log(createNewDate.toLocaleString());

/**************How the booking date works in the web apps************/

let myDatecreate = Date.now();
console.log(myDatecreate);
console.log(createNewDate.getTime());//To convert the date in the perfect value 
//Compare it with previous date so that who booked earlier can be verrified (******IMP*******)





