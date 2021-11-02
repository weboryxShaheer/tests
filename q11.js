var matrix= [[1,2,3],[4,5,6],[7,8,10]];
var d1=0, d2=0;
for(let i=0;i<matrix.length;i++){
d1+=matrix[i][i];
d2+=matrix[matrix.length-1-i][i];
}
console.log(d1-d2);