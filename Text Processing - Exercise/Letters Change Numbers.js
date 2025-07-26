function LettersChangeNumbers(input) {
    let tokens = input.trim().split(/\s+/);
    let total = 0;

    for (let token of tokens) {
        let firstLetter = token[0];
        let lastLetter = token[token.length - 1];
        let number = Number(token.slice(1, -1));

        
        let firstPos = firstLetter.toLowerCase().charCodeAt(0) - 96;
        let lastPos = lastLetter.toLowerCase().charCodeAt(0) - 96;

    
        if (firstLetter === firstLetter.toUpperCase()) {
            number /= firstPos;
        } else {
            number *= firstPos;
        }

      
        if (lastLetter === lastLetter.toUpperCase()) {
            number -= lastPos;
        } else {
            number += lastPos;
        }

        total += number;
    }

    console.log(total.toFixed(2));
}
LettersChangeNumbers('A12b s17G');