const height=5.4
var name='Srikanth'
let city='Swarna'
state='Andra'

console.table([height,city,state,name])

/* var is a universal variable declaration prevously, by there was conflict i.e scope bound .
suppose if declare name in one function , and changed another string that assigned same variable name ,the effect will be uncontrolled 

Hence Let keyword introdced that can made changes in the scope, that make it so convienient to write many same variable names

We can even create a variable without declarations that is not prefarable///

a variable without assignment will prients "undefined"