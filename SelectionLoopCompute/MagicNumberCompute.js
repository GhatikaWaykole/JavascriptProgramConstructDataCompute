const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter the magic data number",function(number1){
    console.log(number1);
    let low = 1, high = 100, n, p, x;
   // console.log("\nyour integer number between 1 to 100 .");
    while(low != high){
        p = parseInt(low + high);
        if( p % 2 == 0){
            number1 = p/2;
        }
        else
        number1 = (p-1)/2;
    r1.question("Enter the choice 1. number is proper \n 2. number is smaller \n 3. number is greater",function(num1){
        switch (num1) {
            case 1: {
                console.log("The magic number is " + number1 + " !");
                low = high = number1;
                break;
            }
            case 2: {
                high = number1;
                p = parseInt(low + high);
                if (p % 2 == 0) number1 = p / 2;
                else number1 = (p - 1) / 2;
                break;
            }
            case 3: {
                low = number1;
                p = parseInt(low + high);
                if (p % 2 == 0) number1 = p / 2;
                else number1 = (p - 1) / 2;
                break;
            }
            default: console.log("Invalid choice!");
        }
    })
}
});