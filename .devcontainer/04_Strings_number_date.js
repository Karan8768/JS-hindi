const name = "Karan"
const repocount =50
//console.log(`Hello my name is ${name} nd my repocount is ${repocount}`)  // String Interpolation
const gameName = new String('Karan-Game')
console.log(gameName[0])
console.log(gameName.__proto__)  //{}
console.log(gameName.toUpperCase()) 
console.log(gameName.toLowerCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('G'))
console.log(gameName.substring(1,4))
console.log(gameName.slice(0,4)) // negative value accept in slice (-8,4)
console.log(gameName.split('-'))
console.log(gameName.replace('-',''))


//Number and Maths
const score=400
const balance = new Number(100)
console.log(balance)   //o/p - [number: 100]
console.log(balance.toString())
console.log(balance.toFixed(2))
const othnum = 23.8946
console.log(othnum.toPrecision(3))
const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.6))
console.log(Math.min(4,3,6,8))
console.log(Math.random())
console.log(Math.floor(Math.random()*10)+1)
const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1)+min))

//Date
let myDate = new Date()
console.log(myDate)