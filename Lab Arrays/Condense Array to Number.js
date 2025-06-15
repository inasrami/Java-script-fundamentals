function CondenseArrayToNumber(arr){
    if(arr.length === 1){
        console.log(arr[0]);
        return;
    }

    let result = [];

    while(true){

        for(let i = 0; i < arr.length - 1; i++){
            let firstValue = arr[i];
            let secondValue = arr[i + 1];

            let sum = firstValue + secondValue;
            result.push(sum);
        }

        if(result.length === 1){
            break;
        }

        arr = result;
        result = [];
    }

    console.log(result[0]);

}
CondenseArrayToNumber([2,10,3])