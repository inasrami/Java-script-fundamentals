function MaxSequenceOfEqualElements(arr){
    let maxLength = 1;
    let maxStartIndex = 0;

    let currentLenght = 1;
    let currentIndex = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i - 1]){
            currentLenght++;
        } else {
            currentLenght = 1;
            currentIndex = i;
        }
        if (currentLenght > maxLength){
            maxLength = currentLenght;
            maxStartIndex = currentIndex;
        }
    }
    let result = [];
    for(let i = maxStartIndex; i < maxStartIndex + maxLength; i++){
        result.push(arr[maxStartIndex]);
    }
    console.log(result.join(' '));
}
MaxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])