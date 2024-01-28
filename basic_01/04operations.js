// let x=4
// console.log(x+4)

// let s1='Srikanth'
// let s2=' An****a'
// let s3=s1+ s2
// console.log(s3)

    //-------------ECMAScript--------------
// console.log(('4'+3))==>43 String
// console.log(4+'3')==>43 String

// console.log('2'+3+4) =>243 String
// console.log(3+4+'5')  =>75 String

    //------------MDN------------
//Unary postfix: Return the valur after the increment
//      prefix: Return the value before the increment 

//__________________________________________________________________
// Null coalescing operator (??): null/undefined
let val;
val=5 ?? 10
console.log(val)
//while dealing with database, there might get two types of data. if in case of null , whole code will distrub, to avoid null ans...
let val2=null ?? 10
let val3=null ?? 20
console.log(val3)

//__________________________________________________________________________
// terinary oper
let one=10;
one>5 ? console.log("greater than 5") :console.log('less than 5');


