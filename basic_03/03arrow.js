//this is a key wird that acces 'current context' of the vatible i.e cureent varibles in {} 

const obj={
    name:'Srikanth',
    age:21,
    popup: function(){
        console.log(`${this.name} logged in sucessfully of age ${this.age}`)
        console.log(this) // print current contect
    }
}
// obj.popup() //current context is srikanth 21

// obj.name="Saikanth"
// obj.popup() //now current context is Saikanth 21
//-----------------------------------------------------------
//console.log(this) // In node env, current conext always {}. Window obj in inspect
//----------------------------------------------

// function objthis(){
//     console.log(this) // gives all info
// }
// objthis()

//--------------------------------------------

// function this_use(){
//     const username='srikanth'
//     console.log(this.username)  //undefined
// }
// this_use()

//-----------------------------------------------

//Arrow fun
//  const twoSum=(n1,n2)=>{
//     return n1+n2             //explicit return
//  }
//  console.log(twoSum(2,3))


 const twoSum=(n1,n2)=>( n1+n2 )  //()  using this represents implicit return 
 console.log(twoSum(2,3))           // id braces used 'return' must