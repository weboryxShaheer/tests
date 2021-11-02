var str = ["banana","apple","banana","apple","mangoe","Shaheer","Ahmed","Shaheer"];
var count ={};
str.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
console.log(count);