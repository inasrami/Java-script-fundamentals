function EqualSums(arr){
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++){
        totalSum += arr[i];

    }

    let leftSum = 0;
     for (let i = 0; i < arr.length; i++){
        let rightSum = totalSum - leftSum - arr[i];
        if(leftSum === rightSum){
            console.log(i);
            return;
        }

        leftSum += arr[i];
    }
    console.log('no');
    
}
EqualSums([1, 2, 3, 3])
EqualSums([10, 5, 5, 99,

3, 4, 2, 5, 1,

1, 4])