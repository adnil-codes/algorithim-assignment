/*Implement a function, findProduct(), that takes an array of integers, replaces each element of the array with the product of the other elements. 
let array = [ 1, 2, 3, 4 ] => [24, 12, 8, 6]
Let array1 = [0,1,2,3,4] => [24, 0, 0, 0]
 */
 
const arr = [1, 2, 3, 4];

function findProduct(arr){
  let product = arr.reduce((a,b) => a * b);
 let newArr = [];
 
 for(let i = 0; i <arr.length; i++) {
  newArr.push(product/arr[i])
}
 return newArr
 
console.log(findProduct(arr));
