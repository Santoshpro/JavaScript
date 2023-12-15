
//inbuit function (Prototype)

let arr=[4,2,5,6,3,4,7]
// console.log(arr.sort())


// 1) -------1st way to create object---->
let person5={
    name:'Santosh',
    gender:'male',
    age: 26
   
}


// 2) ---------2nd way using classes and constructor function
class Person{
    // 1)_to create object using class
    // constructor is basically a function  whuch  is 
    // used to create a object of that class
    constructor(_name, _age, _gender){
        this.name=_name,
        this.age=_age,
        this.gender=_gender

        //adding function inside object method 1
        // this.greet=function greet(){
        //     console.log(`${this.name} says Hello`)
        // }
        
        this.name=_name
    }
    // -----------3 rd way prototype
    //prtotype
    greet(){
        console.log(`${this.name} say hello`)
    }

}

let person1= new Person('Santosh', '24','male')
let person2= new Person('Santosh', '24','male')
let person3= new Person('Santosh', '24','male')
let person4= new Person('Santosh', '24','male')

// console.log(person1)
// console.log(person2)
// console.log(person3)
// console.log(person4)
console.log(person5)
// Object.prototype.whoIsYourMaster= function(){
//     console.log("Sanchit is my master")

// }
let arrayprototype = Object.getPrototypeOf(arr)

let objectPrototype = Object.getPrototypeOf(arrayprototype)
let protoOfObjectProto = Object.getPrototypeOf(objectPrototype)

console.log(protoOfObjectProto)
