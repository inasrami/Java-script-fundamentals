function AmazingNumbers(number){
    let numberAsString = String(number);
    let sum = 0;

    for ( let i = 0; i < numberAsString.length; i++){
        let currentSymbol = numberAsString[i];

        sum += Number(currentSymbol);
    }

    let sumString = String(sum);
    let isAmazing = false;
    for(let i = 0; i < sumString.length; i++){
        let currentDigit = sumString[i];
        if(currentDigit === '9'){
            isAmazing = true;
        }
    }
    if(isAmazing){
        console.log(`${number} Amazing? True`);
    }else {
        console.log(`${number} Amazing? False`)
    }

    
}
AmazingNumbers(1233)