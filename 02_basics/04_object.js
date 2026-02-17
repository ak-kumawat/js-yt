// const tinderUser = new Object()
const tinderUser = {}//first object is define then insert element in the object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//  console.log(tinderUser);

const regularUser = {// 
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ajay",
            lastname: "Kumawat"
        }
    }
}

//  console.log(regularUser.fullname.userfullname.firstname);//Ajay

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3)
 const obj3 = Object.assign( {},obj1, obj2, obj4)

//const obj3 = {...obj1, ...obj2}
 console.log(obj3);
// object.assign () and ...obj1,...obj2  output is same difference is object.assign change in first object ,add all element in first obj 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Ajay"
}

// course.courseInstructor

 const {courseInstructor: instructor} = course

// console.log(course.courseInstructor);
  console.log(instructor);//access without (course.)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]