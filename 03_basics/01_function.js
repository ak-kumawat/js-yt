function SayName (){
    console.log("a")
    console.log("j")
    console.log("a")
    console.log("y")
}
// SayName();

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers(2,3)
function addTwoNumbers(number1, number2){
    let result =number1+number2
    return result;
}
console.log(addTwoNumbers(4,5))

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

let result =loginUserMessage()
// console.log(result)
