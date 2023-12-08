// -------Array----->
let array=[1,2,3,4,5]

// // 1)Access an Element
console.log(array[2])

// //2) length of array
// console.log("Length of array" + array.length)

 // 3) add an element  at the end of the array

// array.push(6)
// console.log(array)
// array.push([6,7,8,9])
// console.log(array)
// array.push(...[6,7,8,9])
// console.log(array)
// //spread operator

// let array2=[6,7,8,9]
// array.push(...array2)


// 4) remove element from last
// -------pop------>

array.pop()
console.log(array)

let lastElement=array.pop()
console.log(array, lastElement)

// 5) add element to the first
array.unshift(0)
console.log(array)

// 6) remove element from the first
array.shift()
console.log(array)
