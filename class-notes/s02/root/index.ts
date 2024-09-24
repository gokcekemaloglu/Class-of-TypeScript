console.log("De09 Session2")

const person : {username:string, age:number, city:string,isActive:boolean} = {
    isActive: false,
    address: "s"
}

const person2 : {username:string, age:number, city:string,isActive:boolean} = {
    username: "Anthony",
    age: 30,
    city: "Berlin",
    isActive: false,
}

type Person = {
    username: string, 
    age: number, 
    city: string,
    isActive: boolean
}

const person3 : Person = {
    username: "Mustafa",
    age: 30,
    city: "Istanbul",
    isActive: true
}

//* Interface


