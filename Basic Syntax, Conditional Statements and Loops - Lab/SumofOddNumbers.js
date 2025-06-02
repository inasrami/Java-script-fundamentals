function printOddNumbersAndSum(n) {
    let sum = 0;
    let currentNumber = 1;
    
    for (let i = 0; i < n; i++) {
        console.log(currentNumber);
        sum += currentNumber;
        currentNumber += 2;
    }
    
    console.log(`Sum: ${sum}`);
}printOddNumbersAndSum(5)