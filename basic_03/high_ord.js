//for of 
// arr=[1,2,3,4] //can replace with obj, strings,
// for (const num of arr) {   
//     console.log(num)
// }
//________________
// const map=new Map()  //unique
// map.set('in','India')
// map.set('us','United States')
// console.log(map)
// // for(const key of map){
//     console.log(key)
// // }

// for(const [key,val] of map){
//     console.log(val)
// }

//Map is iterable with for-of, not with for-in
//where for-of is not for objects, for-in used for them, access key returns key, obj[key] gives val

// code=['js','c','cpp','py']
// code.forEach( function(item){
//     console.log(item)
// }   
// );



//Filters
const books=[1,2,3,4,5,6,7,8,9,10]
// const req=books.filter((bk)=>(bk>5))    //() returns automatically
// console.log(req)

newBook=books.map((num)=>(num*10))
             .map((num)=>(num+1))
             .filter((num)=>(num>40))
//console.log(newBook)

initial=0
const reduceFun=books.reduce((acc,curr)=> acc+curr,initial )
console.log(reduceFun)
//Accumulator is an empty array, that adds each num and store it in initial . it will recurssivly ===> sum of elements in array


// Bill calculation
const shoping=[
    {
        name:'flute',
        num:2,
        cost:4800
},
{
        name:'violin',
        num:1,
        cost:8000
}
]

const bill=shoping.reduce((acc,item)=>acc+(item.cost * (item.num)),0)
console.log(bill)


