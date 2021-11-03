function adjacentElementsProduct(inputArray) {
    var arr = inputArray;
    var res= arr[0]*arr[1];
    var p = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]*arr[i+1] > p) {
       res=arr[i]*arr[i+1];
      };
    };
    console.log(res);
    return res;
  };
  
  (adjacentElementsProduct([3,6,-2,-5,7,3]));