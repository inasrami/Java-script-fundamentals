function ReverseAnArrayofNumbers(number, arr){
    let newArr = [];

    for (let i = 0; i < number; i++){
        let oldArrValue = arr[i];

        newArr[i] = oldArrValue
    }
    let reversedArr = newArr.reverse();
    console.log(reversedArr.join(' '))

    
}
ReverseAnArrayofNumbers(3, [10, 20, 30, 40, 50])