function name(){
    console.log('S')
    console.log('R')
    console.log('I')
}
// name()

//'undefined' if no parameters mention for the function that req parameters

//++++++++++++++++Rest++++++++++//
function count(item1){
    return item1
}
// console.log(count(2))

//..... for real case of shopkeeper he doent know howmany items that a person buy to sset parameters, The parameter show dynamically go to defination and should execute

function count(item1){
    return item1
}
console.log(count(2,200,300,500))  //prints only 2


function count(...item1){
    return item1
}
console.log(count(2,200,300,500))  //REST operator wtakes dynamically


function count(val1,val2,...item1){
    return item1
}
console.log(count(2,200,300,500))  //prints only rest of eelemnts that are unnamed