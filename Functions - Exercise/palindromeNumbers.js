
function palindromeNumbers(numbers) {
    numbers.forEach(num => {
        const numStr = num.toString();
        const reversedStr = numStr.split('').reverse().join('');
        console.log(numStr === reversedStr);
    });
}


palindromeNumbers([123, 323, 421, 121]); 