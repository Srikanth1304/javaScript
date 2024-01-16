//single ton(constructor method)

//object literals 
const key=Symbol('key1')
const obj={
    name:'Srikanth', //String
    'height':5.4,
    age:21,          //Number
    email:'srikanthchebrolu727@gmail.com',
    isLog:false,     //Boolean
    [key]:'its imp',    //handling symbol
    workdays:['Mon','Tue'],

    greetings:function(){
        console.log('hi');
    }

}

//acess is of two types. Mostly dot perator is in usage , but there limitations if key is in string, and in case of symbol
//Hence it is higly preferred to use sqare brackets

//console.log(obj[height])  error
console.log(obj['height']) //done
console.log(obj.height)  //done


console.log(obj.key) //undefined
console.log(obj[key]) //done

//change (for changing dot op is prefered to use )
obj.name='Saikanth'
 console.log(obj)