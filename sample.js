const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the number",function(a){
console.log(a),
rl.close()
});
