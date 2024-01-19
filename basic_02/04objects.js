const obj1={a:97,b:98,c:99,d:100}
const obj2={A:65,B:66,C:67,D:68}
// const obj3={obj1,obj2}
// console.log(obj3)
//console.log(Object.assign({},obj1,obj2))
const obj3={...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(obj1))
console.log(obj1.hasOwnProperty('d'))

//obj destructuing 
const course={
    courseName:'JS',
    duration:'12weeks',
    courseInstructor:'Srikanth'

}
//console.log(course.courseInstructor)     it is too hard to write such hard line 
const {courseInstructor:Ins}=course
console.log(Ins)



//++++++++++++++++++++++JSON
{
    "name": "Srikanth",
    'age': 21,


}

or 

[
    {},{},{}  //in case of many 
]