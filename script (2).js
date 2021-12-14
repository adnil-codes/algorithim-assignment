const arr1 = [1, 2, 4, 5, 10, 6, 3];
const arr2 = [0, 8, 19, 90, 11, 16, 13];

const mergedArray = [...arr1, ...arr2]
// mergedArray= mergedArray.sort()

console.log(mergedArray);

mergedArray.sort((x,y) => x - y);

console.log(mergedArray);
