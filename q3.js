let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let k = 0; k < i; k++) {
    string += i;
  }
  string += "\n";
}
console.log(string);