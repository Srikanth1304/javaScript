//GLobal Scope, Local scope ie in the braces 
//let a=100
const b=200
var c=300               // gobal scope

if(true){               //scope within braces 
    let a=10
    console.log('inner',a)
    console.log(c)      // var can access from any where
}

//console.log(a) 
console.log(b)
console.log(c)


//Clouser parent Scope values can be accessable to child scope 

if(true){
    const user='Srikanth'
    if (user=='Srikanth'){
        const url='@srikanth13'
        console.log(user+url)  //user can be accessable because of clouser property
    }
    console.log(user)
    //console.log(url) out of scope
}
