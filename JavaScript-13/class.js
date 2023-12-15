class Person{
    // 1)_to create object using class
    // constructor is basically a function  whuch  is 
    // used to create a object of that class
    constructor(_name, _age, _gender){
        this.name=_name,
        this.age=_age,
        this.gender=_gender

        //adding function inside object method 1
        this.greet=function greet(){
            console.log(`${this.name} says Hello`)
        }
        
        this.name=_name
    }



    
//static function
// static whoAreYou(){
//     console.log(this)
//     console.log("Iam person")

// }

static getOlderPerson(person1, person2) {
    if (person1.age > person2.age) {
        console.log(`${person1.name} is older`)
    } else {
        console.log(`${person2.name} is older`)
    }
}

}

  






    




let person1=new Person('Santosh','24', 'male')
let person2= new Person('Sandeep', '26', 'male')

console.log(person1)


person1.greet()//caling with object
// person2.greet()

// person1.saybye=function saybye(){
// //  console.log("bye")
// }
// person1.saybye()
// Person.whoAreYou()
Person.getOlderPerson(person1,person2)