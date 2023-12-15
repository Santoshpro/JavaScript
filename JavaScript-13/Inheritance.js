class Person{
    // 1)_to create object using class
    // constructor is basically a function  whuch  is 
    // used to create a object of that class
    constructor(_name, _age, _gender){
        this.name=_name,
        this.age=_age,
        this.gender=_gender
        this.greet=function greet(){
            console.log(`${this.name} says Hello`)
        } 
      
    }

}

//Dervied class : class which is inheriting from someone else :student
//parent class: Class which is being inherited: person
//Constructor: Constructor function of your derived class
//super constructor: constructor function of your parent class



//student class
class Student extends Person{
    constructor(_name, _age, _gender,_cgpa,_batchName){
        super(_name, _age, _gender)
        this.cgpa=_cgpa
        this.batchName=_batchName
        // this.greet=function greet(){
        //     console.log(`${this.name} says Hello`)
        // } 
    }
    
}

//Teacher class
class Teacher extends Person{
    constructor(_name,_age, _gender, _averageRating,_batchStrength){
        super(_name, _age, _gender)
        this._averageRating=_averageRating
        this._batchStrength=_batchStrength
        // this.greet=function greet(){
        //     console.log(`${this.name} says Hello`)
        // } 
    }  


}
let person1 = new Person('Rajesh', 25, 'male')
// console.log(person1)
person1.greet()

let student1 = new Student('Balla', 30, 'male', '8.5', 'LLD Full stack')
// console.log(student1)
student1.greet()

let teacher1 = new Teacher('Sanchit', 26, 'male', 4, 100)
console.log(teacher1)
// Teacher.func()

