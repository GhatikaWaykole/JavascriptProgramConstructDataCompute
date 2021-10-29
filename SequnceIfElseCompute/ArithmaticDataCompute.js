const readline = require('readline');
const { compileFunction } = require('vm');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum1 =0;
let sum2 =0;
let sum3 =0;
let sum4 =0;
let max = 0;
let min = 0;
rl.question('Please Enter Number For A: ', (a) => 
{
    rl.question('Please Enter Number For B: ', (b) => 
    {
        rl.question('Please Enter Number For C: ', (c) => 
        {
            a = Number(a);//Parse a to Number
            b = Number(b);//Parse b to Number
            c = Number(c);//Parse c to Number
            console.log("Value of A is :- "+a);
            console.log("Value of B is :- "+b);
            console.log("Value of C is :- "+c);
            sum1 = (a + b * c ); 
            console.log("a + b * c "+sum1);
            sum2 = (a % b + c );
            console.log("a % b + c"+sum2);
            console.log(" c + a / b");
            sum3 = ( c + a / b );      
            console.log(" Answer is :- "+sum3);
            console.log("              4] a * b + c                      ");
            console.log("------------------------------------------------");
            sum4 = ( a * b + c );      
            console.log(" Answer is :- "+sum4);
            console.log("------------------------------------------------");

            if(sum1 < sum2 && sum1< sum3 && sum1< sum4){
                console.log("minimum the number"+sum1);
            }
            else if(sum2 < sum1 && sum2< sum3 && sum2< sum4){
                console.log("minimum the number"+sum2);
            }
            if(sum3 < sum1 && sum3< sum2 && sum3< sum4){
                console.log("minimum the number"+sum3);
            }
            else{
                console.log("minimum the number"+sum4);
            }
            if(sum1>sum2 && sum1>sum3 && sum1>sum4){
                console.log("maximum the number"+sum1);
            }
            else if(sum2>sum1 && sum2>sum3 && sum2>sum4){
                console.log("maximum the number"+sum2);
            }
            if(sum3>sum1 && sum3>sum2 && sum3>sum4){
                console.log("maximum the number"+sum3);
            }
            else{
                console.log("maximum of the number"+sum4);
            }

            console.log(" ***** Maximum Number ***** :- "+max);
            console.log(" ***** Minimum Number ***** :- "+min);
            rl.close();
        });
    });
});