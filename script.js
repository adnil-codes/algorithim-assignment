let array = [ 1, 2, 3, 4 ];
let array1 = [0,1,2,3,4];
 
function findProduct(arr){
  const sumOfCompArray = (compArray) => {
    let product = 1
    for(let num of compArray){
      product = product * num
    }
    return product
  }
  
  let resultingArray = []
  //[1,2,3,4]
  for(let num of arr){
    let complimentArray = arr.filter(a => a !== num)
    resultingArray.push(sumOfCompArray(complimentArray))
  }
  
  return resultingArray
}
console.log(array1);