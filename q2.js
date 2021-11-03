//input two arrays
var input1 =[1,2,3], input2 =[4,5,6];
var merged_array =[];
//merge arrays in another array
for (var k=0;k<input1.length;k++){
    merged_array.push(input1[k]);
}
 for (var k=0;k<input2.length;k++){
     merged_array.push(input2[k]);
 }
console.log(merged_array);