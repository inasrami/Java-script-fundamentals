function Calculator(number, operator, number2){
    result = 0;
    switch(operator){
        case '+':
            result = number + number2;
            break;
        case '-':
            result = number - number2;
            break;
        case '*':
            result = number * number2;
            break;
        case '/':
            result = number / number2;
            break;
    }
    console.log(result.toFixed(2))
}
Calculator(5,

'+',

10)