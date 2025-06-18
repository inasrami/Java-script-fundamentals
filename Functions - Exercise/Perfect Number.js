function PerfectNumber(n){
    function findPositiveDivisors(num){
        result = [];
        for(let i = 1; i < num; i++){
            if(num % i === 0){
                result.push(i);
            }
        }
        return result;
    }
    function sumArray(arr){
        let result = 0;
        for(let i = 0; i < arr.length; i++){
            result += arr[i];
        }
        return result;
    }
    let resultArray = findPositiveDivisors(n);
    let sumResult = sumArray(resultArray);
    if(sumResult === n){
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }


}
PerfectNumber(28)