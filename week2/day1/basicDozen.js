// # Basic Dozen
console.log("Basic Dozen")
// 1. Print integers 1 through 100
// for (var i = 1; i <= 100; i++) {
//   console.log(i)
// }
// 2. Print integers 1 through 100 backwards
// for (var i = 100; i > 0; i--) {
//   console.log(i)
// }
// 3. Print integers evenly divisible by 5 that are between 1 and 100
// for (var i = 5; i < 101; i+=5) {
// for (var i = 5; i < 101; i++) {
//   if (i % 5 === 0) {
//     console.log(i)
//   }
// }
// 4. Print the sum of a given array of integers
// [x] print sum
// [x] given array
// function algo4(arr) {
//   var sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     // sum = sum + arr[i]
//   }
//   console.log(sum)
// }
// algo4([10, 20, 30]) // 60
// 5. Given an array of integers, create and return a new array that has only the even integers
// [x] given array
// [x] create an array
// [x] check for even nums
// [x] return array
// var testArr = [55, 68, 100, 44]

// function algo5(arr) {
//   var newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(i)
//     // console.log(arr[i])
//     if (arr[i] % 2 === 0) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// console.log(algo5(testArr))
// var returnedArr = algo5(testArr)
// console.log(returnedArr)
// 6. Given an array of integers, print the average of only the odd numbers
// [x] given array
// function algo6(arr) {
//   var sum = 0
//   var count = 0
//   // [x] we need a loop I think
//   for (let i = 0; i < arr.length; i++) {
//     // [x] check for odd
//     if (arr[i] % 2 === 1) {
//       sum = sum + arr[i]
//       count = count + 1
//     }
//   }
//   // [x] print avg
//   console.log(sum / count)
// }
// var testArr = [1, 2, 3, 4, 5]
// algo6(testArr) // 3
// 7. Given an array of integers, replace negative numbers with the string 'negative' and positive numbers with the string 'positive'
// function algo7(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = "negative"
//     } else {
//       arr[i] = "positive"
//     }
//   }
//   return arr
// }
// console.log(algo7([10, -343, 9, 0, -3434]))
// 8. Given an array of integers, return the sum of the min and the max values
// function algo8(arr) {
//   var min = arr[0]
//   var max = arr[0]
//   var sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i]
//     }
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   sum = min + max
//   return sum
// }
// console.log(algo8([10, -343, 9, 0, -3434]))
// 9. Given an array, swap the first and the last items
// function algo9(arr) {
//   var temp = arr[0]
//   arr[0] = arr[arr.length - 1]
//   arr[arr.length - 1] = temp
//   return arr
// }
// console.log(algo9([10, -343, 9, 0, -3434]))

// 10. Given an array and an integer, return a count of how many integers are less than the given integer
// function algo10(arr, y) {
//   var count = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < y) {
//       count++
//     }
//   }
//   return count
// }
// console.log(algo10([10, -343, 9, 0, -3434], 8)) // 3

// 11. Given a start integer and a stop integer, print integers from the start (inclusive) to the stop (exclusive)
// function algo11(start, stop) {
//   for (let i = start; i < stop; i++) {
//     console.log(i)
//   }
// }
// algo11(2, 10)
// 12. Given an array, shift each item to the right 1 index, replace the first item with 0
// function algo12(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     arr[i] = arr[i - 1]
//   }
//   arr[0] = 0
//   return arr
// }
// var answer = algo12([10, 20, 30, 40, 50]) //[0, 10, 20, 30, 40, 50]
// console.log(answer)
