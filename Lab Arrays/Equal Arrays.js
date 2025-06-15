function EqualArrays(firstArr, secondArr){
    let arraysAreEqual = true;
    let sum = 0;
    let diffIndex = -1;

    for(let i = 0; i < firstArr.length; i++){
        let firstValue = firstArr[i];
        let secondValue = secondArr[i];

        if(firstValue === secondValue){
            sum += Number(firstValue)
        }else{
            arraysAreEqual = false;
            diffIndex = i;
            break;
        }
    }
    if ( arraysAreEqual){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }else {
        console.log(`Arrays are not identical. Found difference at ${diffIndex} index`)
    }
}
EqualArrays(['10','20','30'],

['10','20','30'])