
//  1) ---------callback----->

// function func1(a,b,callback){
//     callback()//call function inside function
// return a+b;
// }

// function func2(){
//     console.log(" I m function")
// }
// let num1=1
// let num2=2
// let sum=func1(num1,num2,func2) //---goes to callback and calll callabcak
// console.log(sum)
// func2()




// ----- 2) pass multiple function as arguments---->
// function func1(a,b,callback1, callback2){
//     callback1()
//     callback2()
//     //call function inside function
// return a+b;
// }

// function func2(){
//     console.log(" I m function")

// }
// function func3(){
//     console.log(" I m function")
// }
// l
// let num1=1
// let num2=2
// let sum=func1(num1,num2,func2, func3) //---goes to callback and calll callabcak
// console.log(sum)
// func2()

//  3) ---------example2----->

function square(a){
    return a*a;
}
function sum(a,b){
    return a+b;
}
function sumOfSqaure(a, b, square, sum){
    let a2=square(a);
    let b2= square(b);
    let sumOfSqaure=sum(a2,b2,);
    return sumOfSqaure
}
let a=1;
let b=2;
console.log(sumOfSqaure(a,b, square,sum))