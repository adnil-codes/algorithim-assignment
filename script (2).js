/*Question
Write a function that merges elements of at most two arrays and returns an array of the merged elements in sorted order.
E.g. given, let array1 = [1, 2, 4, 5, 10, 6, 3 ] and let array2 = [0, 8, 19, 90, 11, 16, 13 ]
Should return => [0,1,2,3,4,5,6,8,10,11,13,16,19,90]*/

const arr1 = [1, 2, 4, 5, 10, 6, 3];
const arr2 = [0, 8, 19, 90, 11, 16, 13];

const mergedArray = [...arr1, ...arr2]

console.log(mergedArray);

mergedArray.sort((x,y) => x - y);

console.log(mergedArray);
