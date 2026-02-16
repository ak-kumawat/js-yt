const myArr =[1,2,3,4]
const myHeros=["Shaktiman","naagraj"]

const myarr2=new Array(1,2,3,4)
console.log(myArr[1])

//array method
myArr.push(5);
myArr.push(6);
console.log(myArr)
myArr.pop();

myArr.shift()//delete at front
myArr.unshift(8)//add at front

// console.log(myArr.includes(8));//element are exist or not in the array
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()//join convert array  in single string

// console.log(myArr);
// console.log(typeof newArr);//string

// slice ->Creates a duplicate copy of part of the array.
//splice ->Cuts out or adds items to the original array.

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

