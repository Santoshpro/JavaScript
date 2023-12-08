
// 1)--------pure function--->
function pure(a,b){
    let sum= a+b;

//here, console log is outside(global) so it is dependency on console
    // console.log(`sum ${a} and  ${b} is ${sum}`);
    return sum;

}
let sum= pure(1,2);
console.log(sum);

// 2)impure Function------->
//here b is depend on a which is outside scope
// var a=10;
// function impure(b){
//     b=b+a;
//     a++;
//     return b;
// }
// console.log(impure(5));
// console.log(impure(5));
// console.log(impure(5));