console.log("Cohort DE09");
var b = 5;
var c = 2;
// b = "5"  // Type 'string' is not assignable to type 'number'.
var e = "Hello";
var f = "World!";
var g;
var h; // any atar otomatik olarak
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
var usernames = ["Kemal", "Mustafa"];
usernames.push("ayşe");
// usernames.push(5) // Argument of type 'number' is not assignable to parameter of type 'string'. //error
var surnames = [];
surnames.push("Harold");
surnames.push("25");
// type declaration 2. Yol
var nums2 = [5, 6];
console.log(surnames);
