let a = 300
// let c=100
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);//in the conditional statement in 
}
// console.log(a)
// console.log(b)//it's give error ->ReferenceError: b is not defined
// console.log(c)

function one(){
    const username = "Ajay"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //  console.log(website);//error ->ReferenceError: website is not defined

     two()

}

// one()

if (true) {
    const username = "ajay"
    if (username === "ajay") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)// is not a function it's a varable pointer 
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))