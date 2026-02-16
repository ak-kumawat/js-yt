const name ="Ajay"
const  repoCount =50
console.log(name+repoCount+"value")
console.log(`Hello my name is ${name } and my repo count is ${repoCount} `)

const gameName =new String("ajay-jay.com")
console.log(typeof gameName)//object
console.log(gameName)


console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));//a
console.log(gameName.indexOf('j'));//

const newString = gameName.substring(0, 4)
console.log(newString);//ajay

const anotherString = gameName.slice(-5, -1)
console.log(anotherString);//-jay

const newStringOne = "   Ajay    "
console.log(newStringOne);
console.log(newStringOne.trim());//ajay

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));

