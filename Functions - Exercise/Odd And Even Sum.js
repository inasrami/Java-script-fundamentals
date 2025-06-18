

function OddAndEvenSum(num){
    let odd= 0;
    let even = 0;
    let numAsString = num.toString();
    for(let i = 0; i < numAsString.length; i++){
        let currentDigit = Number(numAsString[i]);
        if(currentDigit % 2 === 0){
            even += currentDigit;
        } else {
            odd += currentDigit;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
OddAndEvenSum(1000435);