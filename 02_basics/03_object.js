// singleton
// Object.create
// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Ajay",
    "full name": "Ajay kumawat",
    [mySym]: "mykey1",
    age: 18,
    location: "Sikar",
    email: "ajaymanit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ajay@chatgpt.com"
// Object.freeze(JsUser)// this function freeze the object now onwards no change in the object 
JsUser.email = "ajay@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());//new function define
//  console.log(JsUser.greetingTwo());//new function define
//  console.log(JsUser)