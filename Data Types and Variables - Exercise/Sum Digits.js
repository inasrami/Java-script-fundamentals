function SumDigits(n){
    let num = n;
    let result = 0;

    do {
        let last = num % 10
        result += last
        num = parseInt(num / 10);
    } while(num > 0);
    console.log(result)
}
SumDigits(245678)