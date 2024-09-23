console.log("Cohort DE09");

let b = 5
let c = 2

// b = "5"  // Type 'string' is not assignable to type 'number'.

let e : string = "Hello"
let f = "World!"

let g : boolean;
let h; // any atar otomatik olarak

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

let usernames : string[] = ["Kemal", "Mustafa"]
usernames.push("ayşe")
// usernames.push(5) // Argument of type 'number' is not assignable to parameter of type 'string'. //error

let surnames : string[] = [];
surnames.push("Harold")
surnames.push("25")

// type declaration 2. Yol
let nums2 : Array<number> = [5, 6]

console.log(surnames);


