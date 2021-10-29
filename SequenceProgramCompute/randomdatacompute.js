//1 Random Function to get Single digit
let dice=Math.floor(Math.random()*10);
//2 Use Random to get Dice Number between 1 to 6
let dice1=Math.floor(Math.random()*6)+1;
//3 Add two Random Dice Number and Print the Result
let result =dice1+dice;
console.log(result);
//4 Reads 5 Random 2 Digit values ,then find their sum and the average
let a = Math.floor(Math.random() * 90 + 10)
let b = Math.floor(Math.random() * 90  + 10)
let c = Math.floor(Math.random() * 90 + 10)
let d = Math.floor(Math.random() * 90 + 10)
let e = Math.floor(Math.random() * 90 + 10)
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
let add = a + b +c +d + e;
let average = (add/5);
console.log("Addition of 5 two digit number is : " +add);
console.log("Average of 5 two digit number is : " +average);