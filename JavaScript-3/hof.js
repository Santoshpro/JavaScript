
// 1) ---------Credit Transaction----->
let transaction=[100,-200,300,-500,600]


// function filterCreditTransactions(trancation){
//     let creditTransactions=[]//to get +ve ones
//     for(let i=0; i<transaction.length; i++){
//         if(trancation[i]>0){
//         creditTransactions.push(transaction[i])
//         }
      
//     }
//     return creditTransactions;

    
// }
// let creditTransactions= filterCreditTransactions(transaction)
// console.log(creditTransactions)

// //  2)-----------Debit Transaction------>

// function filterDebitTransactions(transaction){
//     let debitTransactions=[];
//     for(let i=0; i<transaction.length; i++){
//         if(transaction[i]<0){
//             debitTransactions.push(transaction[i])
//          }
//     }
//         return debitTransactions
// }
// let debitTransactions=filterDebitTransactions(transaction)
// console.log(debitTransactions)

// 3-------using callback merging two function in one function----->


function isCredit(transaction){
     return transaction>0;
}
function isDebit(transaction){
    return transaction<0;
}
function filter(transactions, callback){
let filter=[];
for(let i=0; i<transactions.length; i++){
    if (callback(transactions[i])){
        filter.push(transactions[i])
    }

}
return filter;

}
let creditTransactions=filter(transaction,isCredit)
let debitTransactions=filter(transaction, isDebit)
console.log(creditTransactions,debitTransactions)
