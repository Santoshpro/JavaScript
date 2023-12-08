// ----------1st way------>
function func1(){
    console.log("Traditional way")
}
func1();

// ------2nd way to create function like variable ---->
let func2= function(){
    console.log("function Expression")
}
func2()
// ---------3rd way to create function---->
let func3=()=>{
    console.log("Arrow function")
}
func3()

// ------ 4 th way Arrow function example--->
//round brackets is necessary if there are two argumnets
let sum=(a, b)=>{
    return a+a;
}



//if the no.of arguments in a function is 1 then, round
//brackest are also optional
let square=a=>{
    return a*a;
}
//If there is only one line in function, we can remove round braclrets also
let square=a=> a*a;


// store and then call function

let ans=square(3)
console.log(ans)











