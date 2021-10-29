const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter the number 1,10,100,1000",function(number1){
    console.log(number1);
    let numCheck = ( number1 / 10  );
    switch (numCheck)
    {
        case 0.1:
                console.log("\t"+number1+ " The Number is Unit Digit");
                break;
        case 1:
                console.log(number1+ " The Number is Ten Digit");
                break;
        case 10:
                console.log(number1+ " The Number is Hundred Digit");
                break;
        case 100:
                console.log(number1+ " The Number is Thousands Digit")
                break;
    }
    r1.close()
});