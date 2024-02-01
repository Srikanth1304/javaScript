//for of 
arr=[1,2,3,4] //can replace with obj, strings,
for (const num of arr) {   
    console.log(num)
}
//________________
const map=new Map()  //unique
map.set('in','India')
map.set('us','United States')
console.log(map)
for(const key of map){
    console.log(key)
}

for(const [key,val] of map){
    console.log(val)
}

//Map is iterable with for-of, not with for-in
//where for-of is not for objects, for-in used for them, access key returns key, obj[key] gives val

code=['js','c','cpp','py']
code.forEach( function(item){
    console.log(item)
}
    
);


