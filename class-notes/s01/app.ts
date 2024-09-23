console.log("Cohort DE09");

// let b = 5
// let c = 2

// // b = "5"  // Type 'string' is not assignable to type 'number'.

// let e : string = "Hello"
// let f = "World!"

// let g : boolean;
// let h; // any atar otomatik olarak

// let x, y,z : string; // tek satırda birden fazla değişkene "type" belirtemiyoruz, baştakileri "any" olarak kabul ediyor sonrakine asıl tip ataması yapıyor.
// x = "Hello";
// y=5
// z="World!"
// z=5 //error

//* Arrays

// let nums : number[] = [1, 2, "Hi"]

// nums.push("merhaba")
// nums.push(5)
// nums.push(false)

// console.log(nums);

// nums.forEach((item)=>item.toLowerCase())

// let usernames : string[] = ["Kemal", "Mustafa"]
// usernames.push("ayşe")
// // usernames.push(5) // Argument of type 'number' is not assignable to parameter of type 'string'. //error

// let surnames : string[] = [];
// surnames.push("Harold")
// surnames.push("25")

// // type declaration 2. Yol
// let nums2 : Array<number> = [5, 6]

// console.log(surnames);

//* Tuples

// let myTuple : [number,string,boolean] = [5, "Merhaba", false]
// console.log(myTuple);

// let myTuple2 : [number,string,boolean]
// myTuple2 = [6, "World"] // Type '[number, string]' is not assignable to type '[number, string, boolean]'. Source has 2 element(s) but target requires 3.
// console.log(myTuple2);

// // Tuples of Array

// let myTuple3 : [number, string][]
// myTuple3 = [[5, "5"],[6, "6",5]] //Type '[number, string, number]' is not assignable to type '[number, string]'.Source has 3 element(s) but target allows only 2.
// myTuple3.push([7, "7"])
// myTuple3.push(false) //Argument of type 'boolean' is not assignable to parameter of type '[number, string]'.
// console.log(myTuple3);

//? Enum 

// const enum Role {
//     User, //User = 0
//     Admin, // Admin = 1
//     DbAdmin = Admin * 3, // DbAdmin = 3
//     Tester // Tester = 4
// }

// let currentUser : Role = Role.DbAdmin
// currentUser = Role.Tester
// console.log(currentUser);

// enum StatusCodes {
//     NotFound = 404,
//     Created = 201,
//     Accepted = 202, 
//     BadRequest = 500,
//     NoContent = 204,
//     Success = 200
// }

// const response : StatusCodes = StatusCodes.Success

// enum Sizes {
//     Small = "S",
//     Medium = "M",
//     Large = "L",
//     XLarge = 100,
//     XXLarge
// }
// Sizes.Medium
// Sizes["Medium"]
// Sizes[101] // XXLarge // Çok kullanışı bir yöntem değil, çok nadir kullanılır

let hh : any = 1
hh = "Hello"

let k : boolean = hh

//? unknown

let j : unknown = 5
j = "5"

let m : string = j // unknown & any
let n : string = j as string // type assertions (mümkün mertebe kullanılmaması gereken bir yöntem)
