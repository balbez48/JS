let num = 266219;
let result = 1;

while (num > 0) {
  let el = num % 10;
  result *= el;
  num = (num - el) / 10;
}

console.log(result);
result **= 3; //2176782336
let resultStr = result.toString();
console.log(resultStr.substring(0, 2));
