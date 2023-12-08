// --------inbuilt higher order function---->

// let numbers=[1,2,3,4,5,6]

// // 1)---- Map function
// //array of sqaures of each no.

// let squareOfNumber=numbers.map(function(number, index){
//     console.log(index)
//     return number*number
// });
  


// console.log(squareOfNumber)

// //  2) Filter function
//     let transactions=[100,-200, 300, 400, -500,600]
    // let creditTransactions= transaction.filter(function(transaction){
    //     return transaction>0;
    // })




//3) ForEach
//  let numbers=[1,2,3,4,5,6]
//  let ans=numbers.forEach(function(number){
//     // return number*number;
//     console.log(number*number);
// })
//  console.log(ans)

 // 4) Reduce

//calculate the sum of numbers
// let numbers=[1,2,3,4,5,6]
// let sum=0;
// for(let i=0; i<numbers.length; i++){
//     sum=sum+numbers[i];

// }
// console.log(sum)


//  let sum= numbers.reduce(function(sum,number){

//     sum=sum+number
//     return sum
//  },0)//initialvalue
//  // if I dont provide initial value, them the first element in my list will become 
//  //initial value ans looping will stat from first index
//  console.log(sum)

   // 5 )Every
   //every condition should pass
//   let allCredit =transactions.every(function(transaction){
//     return transaction>0;
//    });
//    console.log(allCredit)

   // 6) some
   //condition pased for any element
//    let isAnyDebit=transactions.some(function(transaction){
//        return transaction<0;
//    });
// console.log(isAnyDebit);

//function chaining





















let transactions=[100,-200, 300, 400, -500,600]
let creditTransationsInUSD= transactions.map(function(transaction){
    return transaction/82;
}).filter(function(transactionInUSD){
    return transactionInUSD>0;
});
console.log(creditTransationsInUSD);



