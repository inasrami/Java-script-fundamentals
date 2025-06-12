function IntegerAndFloat(firstNum, secondNum, thirdNum){
        let sum = firstNum + secondNum + thirdNum;

        if (sum % 1 === 0){
            console.log(`${sum} - Integer`);
        } else {
            console.log(`${sum} - Float`);
        }

}
IntegerAndFloat(9, 100, 1.1)