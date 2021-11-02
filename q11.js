var matrix= [[1,3,5],[2,4,6],[7,8,9]];
var d1=0, d2=0;
for(let i=0;i<matrix.length;i++){
d1+=matrix[i][i];
d2+=matrix[matrix.length-1-i][i];
}
console.log(d1-d2);