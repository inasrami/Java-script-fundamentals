function MergeArrays(arr1, arr2){
    let resultArr = [];
    for(let i = 0; i < arr1.length; i++){
        if(i % 2 === 0){
            let firstNumber = Number(arr1[i]);
            let secondNumber = Number(arr2[i]);
            resultArr.push(firstNumber + secondNumber );
        }else{
            let firstString = arr1[i];
            let secondString = arr2[i];
            resultArr.push(firstString + secondString);
        }
    }
    console.log(resultArr.join(' - '))
    
}
MergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])