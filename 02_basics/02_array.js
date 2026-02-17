const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)// as 4th element of the array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//flash

const allHeros = marvel_heros.concat(dc_heros)
//  console.log(allHeros);//two both array in a single line not need to for loop 
const all_new_heros = [...marvel_heros, ...dc_heros]//... ->work all array push in 

//  console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5,6], 7, [6, 7, [4,5 ]]]
console.log(another_array)
const real_another_array = another_array.flat(2)//.flat()->
//Iska use nested arrays (matlab array ke andar array) ko khol kar ek single, seedhi list banane ke liye hota hai.
 console.log(real_another_array);



console.log(Array.isArray("Ajay"))
console.log(Array.from("ajay"))
console.log(Array.from({name: "Ajay"})) // interesting

// Array.isArray(): Check karta hai -> "Kya ye array hai?" (True/False)
// Array.from(): Convert karta hai -> "Isse array bana do."

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));

//Array.of(score1, score2, score3) is a function given parameter to change the array 