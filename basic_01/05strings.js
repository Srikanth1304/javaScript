const name='Srikanth'
const age=21
//console.log(name+age) outdated
//console.log(`My name is ${name} of age ${age}`)  updated

//console.log(name[4])
//create string like object using new keyword
const movie=new String('Gunturu Kharam')
console.log(movie) // represents in key value and had an access of different string methods 

console.log(movie.length)
console.log(movie.toUpperCase())
console.log(movie.toLowerCase())

console.log(movie.indexOf('t'))
console.log(movie.charAt(2))

const sub1=movie.substring(0,3)
console.log(sub1)
const sub2=movie.slice(-14,8)
console.log(sub2)


const music=new String('  karnatic')
console.log(music)
console.log(music.trim())

const url='https://SrikanthChebrolu@2023kfjdwn'
console.log(url.replace('@',"-"))
console.log(url.includes('kanth')) //bool
