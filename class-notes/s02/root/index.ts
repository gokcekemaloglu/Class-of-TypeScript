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

const person2: {
  username: string;
  age: number;
  city: string;
  isActive: boolean;
} = {
  username: "Anthony",
  age: 30,
  city: "Berlin",
  isActive: false,
};

type Person = {
  username: string;
  age: number;
  city: string;
  isActive: boolean;
};

const person3: Person = {
  username: "Mustafa",
  age: 30,
  city: "Istanbul",
  isActive: true,
};

//* Interface

interface ICar {
    model: string,
    year: Date,
    price: number,
    color: string,
    getName: () => string
}

const redCar : ICar = {
    model: "Toyota",
    year: new Date(),
    price: 20000,
    color: "red",
    getName: () => {
      return "Toyota"
    }
}

interface IUser {
  username: string,
  firstName: string,
  age: number,
  getName: () => void
}

const user1:IUser = {
  username: "John",
  firstName: "John",
  age: 30,
  getName: () => {
    console.log("5");    
    return 5
  }
}

// interface IAdminUser {
//   username: string,
//   firstName: string,
//   age: number,
//   getName: () => void,
//   isAdmin: boolean,
//   password: string
// }

// interface IManagerUser {
//   username: string,
//   firstName: string,
//   age: number,
//   getName: () => void,
//   isManager: boolean,
//   department: string
// }

interface IAdminUser2 extends IUser {
  isAdmin: boolean,
  password: string
}

const adminUser : IAdminUser2 = {
  username: "admin",
  firstName: "admin",
  age: 15,
  isAdmin: true,
  password: "1234",
  getName:() => console.log("admin")  
}

console.log(adminUser);

//? object arrays

// const users = [] // any[]
// users.push(5)
// users.push({username:"s"})

const users: IUser[] = []

// users.push(5) //warn ts error
// users.push("5") //warn ts error
// users.push({username: "as"}) //warn ts error
users.push({username: "as",  firstName: "as", age: 25, getName:() => "as"})

//! Type Inference
let myName = "Anthony"

// myName = 5
let arr = [] // any[]

let myArr = [
  {
    username: "as",
    department: "asdf",
    salary: 300000
  }
]
// myArr.push(5) // ts error
// myArr.push({name:"asda"}) // ts error
myArr.push({username:"asda", department: "as", salary: 500000}) 

const myArr2 = [...myArr, ...users] // myArr | IUser iki tipi de birleştirmiş oldu
// myArr2.push(5) // ts error

//! Generics

//* generic kullanmadan
interface Auth {
  id: number,
  username:string
}


interface Category {
  id: number,
  title: string
}

interface Post {
  id: number,
  title: string,
  content: string,
  createdAt: Date,
  extra: Auth[] | Category[]
}

//* generic kullanarak

interface PostBetter <T> {
  id: number,
  title: string,
  content: string,
  createdAt: Date,
  extra: T[] // string[]
}

const testGenerics : PostBetter<string> = {
  id: 1,
  title: "asda",
  content: "asddsa",
  createdAt: new Date(),
  extra: ["extra", "asdas", "generic"]
}

const testGenerics2 : PostBetter<number> = {
  id: 1,
  title: "asda",
  content: "asddsa",
  createdAt: new Date(),
  extra: [5, 6, 7]
}

const testGenerics3 : PostBetter<{id:number, title:string}> = {
  id: 1,
  title: "asda",
  content: "asddsad",
  createdAt: new Date(),
  extra: [{id:5, title: "qwer"}]
}

const testGenerics4 : PostBetter<Category> = {
  id: 1,
  title: "asda",
  content: "asddsad",
  createdAt: new Date(),
  extra: [{id:5, title: "qwer"}]
}

const testGenerics5 : PostBetter<Auth> = {
  id: 1,
  title: "asda",
  content: "asddsad",
  createdAt: new Date(),
  extra: [{id:5, username: "admin"}]
}
