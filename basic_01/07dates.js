// Dates are calculated from jan 01 1970. it is an object
const myDate= new Date()
console.log(myDate.toString())
console.log(myDate.getDate())

const date= new Date(2024,0,22)
console.log(date.toLocaleDateString())

const date1= new Date(2024,0,22,18,58)
console.log(date1.toLocaleString())
