//1) Case 1: global context
"use strict"
// console.log("Global Context |this:", this)



//2)Case 2: function Context

// function  func(){
//     console.log("Function Context |this:",this)
// }
// func()

// // 3) Case 3:  Object method
// // create function inside object
// let obj= {
//     name:'name',
//     func:  function  func(){
//         console.log(" In Object method |this:",this)
//     }
// }
// obj.func()



// 4 ) Case 4: nested Function
// function inside function
let obj= {
    name:'name',
    func:  function  func(){
        function func2(){
            console.log(" In nested function|this:",this)

        }
        func2()
       
    }
}
obj.func()

