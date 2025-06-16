function AddAndSubtract(arr){
    let resultArray = [];
    let originalSum = 0;
    let finalSum = 0;

    for(let i = 0; i < arr.length; i++){
        let currentNumber = arr[i];
        if(currentNumber % 2 === 0){
            resultArray.push(currentNumber + i);
        } else {
            resultArray.push(currentNumber - i);
        }
        originalSum += currentNumber;
        finalSum += resultArray[i];
    }
    console.log(resultArray)
    console.log(originalSum);
    console.log(finalSum);

}
AddAndSubtract([5, 15, 23, 56, 35])