const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter the number of the 2",function(number1){
    let index =0;
    while (number1 < 256)  
    {
            number1=( 2 ** index );
    
            console.log(" Power of 2 ^"+index+" is :-"+number1);
            index = ( index + 1 );
    
    }
     
        r1.close();
});