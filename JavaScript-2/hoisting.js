
// 1)-------normal----->

// var a=10;

// function myFunc(){
//     console.log("Traditional func")

// }
// console.log(a)
// myFunc();

// 2) ------hoisting----->
console.log(a)
 var ans=myFunc(5);
 console.log(ans)
// myFunc("sanchit");

var a=10;

function myFunc(a){
    // console.log("Traditional func" + name)
    var ans= a*a;
    return ans;
}
console.log(a)