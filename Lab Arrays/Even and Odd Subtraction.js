function EvenAndOddSubtraction(arr){
    let evenSum = 0;
    let oddSum = 0;

    for(let number of arr){
        if(number % 2 ==0){
            evenSum += number;
        } else{
            oddSum += number;
        }
    }
    console.log(evenSum - oddSum);
}
EvenAndOddSubtraction([1,2,3,4,5,6])