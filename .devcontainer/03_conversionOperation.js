let score = "33"
// console.log(typeof score);
// console.log(Number(score));
let sc = "33abc"
let valueInNumber = Number(sc) // conversion done in number but value store will be NaN (Not a Number)
//bcz 33abc is not a number
// console.log(valueInNumber); 
//"33" -> 33
//"33abc" -> NaN
//"null" -> 0 undefined -> NaN , true -> 1 
//Boolean conversion 
//true -> 1
//"" -> false
//"hitesh" -> true

let num = 33
let strnum = String(num)
// console.log(strnum)
// console.log(typeof strnum)

//Operations
let value = 3
let negValue = -value
// console.log(negValue)
// console.log(2**3);
// console.log("1"+2+2)
// console.log(1+2+"2")
// console.log("1"+"2")

console.log(null>0);
console.log(null==0)
console.log(null>=0);
console.log("2">1);
console.log("2"===2);