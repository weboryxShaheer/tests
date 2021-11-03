//input two arrays
var input1 =[1,2,3], input2 =[4,5,6];
var output =[];
//merge arrays in another array
for (var k=0;k<input1.length;k++){
    output.push(input1[k]);
}
 for (var k=0;k<input2.length;k++){
     output.push(input2[k]);
 }
console.log(output);