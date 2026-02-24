// for of

// ["", "", ""]// discuss about json data 
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
  //  console.log(` Each char is ${greet}`)
}

// Maps-store as a obj and  unique value and iterable 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


 //console.log(map);

for (const [value, key] of map) {
    //console.log(key, ':-', value);
}