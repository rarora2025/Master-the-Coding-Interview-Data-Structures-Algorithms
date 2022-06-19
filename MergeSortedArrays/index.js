//calling helper function- original starting indicies [0,0] and combined array []
function mergeSortedArrays(arr1, arr2){
  return merge([0,0], arr1, arr2, []);
  
}

//helper function
function merge(indicies, arr1, arr2, largeArr){

  //checking if both indicies are done- return combined array
  if (indicies[0] === arr1.length && indicies[1] === arr2.length){
  
    return largeArr;

    //checking if the first array has all been inputted into combined array- then append all second element recursively in order
  } else if (indicies[0] === arr1.length){
    
    while (indicies[1] < arr2.length){
      largeArr.push(arr2[indicies[1]])
      indicies[1]++;
      return merge(indicies, arr1, arr2, largeArr)
    }

    //checking if the second array has all been inputted into combined array- then append all first element recursively in order
  } else if (indicies[1] === arr2.length){

    while (indicies[0] < arr1.length){
      largeArr.push(arr1[indicies[0]])
      indicies[0]++;
      return merge(indicies, arr1, arr2, largeArr)
      
    }

    //neither arrays have been fully finished/inputted into combined
  } else {

    //check which current val is smaller and input it, and increase its index in indicies array
    if(arr1[indicies[0]] < arr2[indicies[1]]){
      largeArr.push(arr1[indicies[0]])
      indicies[0]++;
      return merge(indicies, arr1, arr2, largeArr)
      
    } else {
      largeArr.push(arr2[indicies[1]])
      indicies[1]++;
      return merge(indicies, arr1, arr2, largeArr)
      
      
    }
    
  }
  
  
}

//test
console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));