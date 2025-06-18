function FactorialDivision(num1, num2){
        function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    let factorialNum1 = factorial(num1);
    let factorialNum2 = factorial(num2);

    let result = factorialNum1 / factorialNum2; 
    console.log(result.toFixed(2));
}
FactorialDivision(5,

2)