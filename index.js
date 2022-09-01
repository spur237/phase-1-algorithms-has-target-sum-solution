function hasTargetSum(array, target) {
  // Write your algorithm here
 for(let i = 0; i < array.length; i++){
  const complement = target - array[i];
  for(let j=i+1;j< array.length; j++ ){
    if(array[j] === complement)
    return true;
  }
 }
 return false
}

/* 
  Write the Big O time complexity of your function here
*/

// 0(n)
/* 
  Add your pseudocode here
*/

// iterate over array
// identify number that adds to our target
// iterate over remaining array
// if any number gives desired XPathResult, reurn true
// if there is no desired value at the end of the array return false
/*
  Add written explanation of your solution here
*/

