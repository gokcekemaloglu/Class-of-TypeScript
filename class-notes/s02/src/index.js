"use strict";
console.log("De09 Session2");
// const person: {
//   username: string;
//   age: number;
//   city: string;
//   isActive: boolean;
// } = {
//     username: "Anthony",
//     age: 30,
//     city: "Berlin",
//     isActive: false,
//     address: "s",
// };
const person2 = {
    username: "Anthony",
    age: 30,
    city: "Berlin",
    isActive: false,
};
const person3 = {
    username: "Mustafa",
    age: 30,
    city: "Istanbul",
    isActive: true,
};
const redCar = {
    model: "Toyota",
    year: new Date(),
    price: 20000,
    color: "red",
    getName: () => {
        return "Toyota";
    }
};
const user1 = {
    username: "John",
    firstName: "John",
    age: 30,
    getName: () => {
        console.log("5");
        return 5;
    }
};
const adminUser = {
    username: "admin",
    firstName: "admin",
    age: 15,
    isAdmin: true,
    password: "1234",
    getName: () => console.log("admin")
};
console.log(adminUser);
//? object arrays
// const users = [] // any[]
// users.push(5)
// users.push({username:"s"})
const users = [];
// users.push(5) //warn ts error
// users.push("5") //warn ts error
// users.push({username: "as"}) //warn ts error
users.push({ username: "as", firstName: "as", age: 25, getName: () => "as" });
//! Type Inference
let myName = "Anthony";
// myName = 5
let arr = []; // any[]
let myArr = [
    {
        username: "as",
        department: "asdf",
        salary: 300000
    }
];
// myArr.push(5) // ts error
// myArr.push({name:"asda"}) // ts error
myArr.push({ username: "asda", department: "as", salary: 500000 });
const myArr2 = [...myArr, ...users]; // myArr | IUser iki tipi de birleştirmiş oldu
const testGenerics = {
    id: 1,
    title: "asda",
    content: "asddsa",
    createdAt: new Date(),
    extra: ["extra", "asdas", "generic"]
};
const testGenerics2 = {
    id: 1,
    title: "asda",
    content: "asddsa",
    createdAt: new Date(),
    extra: [5, 6, 7]
};
const testGenerics3 = {
    id: 1,
    title: "asda",
    content: "asddsad",
    createdAt: new Date(),
    extra: [{ id: 5, title: "qwer" }]
};
const testGenerics4 = {
    id: 1,
    title: "asda",
    content: "asddsad",
    createdAt: new Date(),
    extra: [{ id: 5, title: "qwer" }]
};
const testGenerics5 = {
    id: 1,
    title: "asda",
    content: "asddsad",
    createdAt: new Date(),
    extra: [{ id: 5, username: "admin" }]
};
