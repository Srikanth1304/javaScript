const arr1=[1,2,3,4 ]
const arr2=[6,7,8,9]
console.log(arr1+arr2)
arr1.push(arr2) //reference 
console.log(arr1)

const a=[32,45,44,55]
const b=[11,10,43,65]
console.log(a.concat(b))
console.log(a)   //copy

console.log(...a,...b) //spread operator
console.log('using of',Array.of(a,b))  //of cannot combine two Arrays ,it make an array from individual variables 

difficult=[1,2,5,[3,0,[11,22,33,[100],44,55],43,21],54,9]
console.log(difficult.flat())  //1 bracket 
console.log(difficult.flat(Infinity))

console.log()

const check='kishn'
console.log(Array.isArray(check))
console.log(Array.from(check))
console.log(Array.from({name:'srikanth'})) //cannot form if it is obj





