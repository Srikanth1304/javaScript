// arrays are objects, resizeable,mixed dataTpes

const myarr=new Array(1,5,3,7)
console.log(myarr)
myarr.push(8)
console.log(myarr)
myarr.pop()
console.log(myarr)

myarr.unshift(0)

console.log(myarr)
myarr.shift()
console.log(myarr)

console.log(myarr.includes(9))

const noSqbrac=myarr.join()
console.log(noSqbrac)

console.log()

const newArr=new Array(1,4,3,2,98,100)
_slice=newArr.slice(1,3)
console.log("original after sliced",newArr)
console.log("Sliced",_slice)

console.log()

const newArr1=new Array(1,4,3,2,98,100)
_splice=newArr1.splice(1,3)
console.log("original after splice",newArr1)
console.log("Spliced",_splice)

/*two difference between them is:
    slice doent take last bound but splice takes
    slice takes copy where splice take part of refence 
     
    */