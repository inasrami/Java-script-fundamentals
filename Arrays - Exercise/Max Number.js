function MaxNumber(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let isBigger = true;
        let left = arr[i];
    
        for(let j = i; j < arr.length; j++){
            let right = arr[j];
            if(right > left){
                isBigger = false;
                break;
            }        
        }
        if(isBigger){
            result.push(left);
        }
    }
    console.log(result.join(' '));
}
MaxNumber([27, 19, 42, 2, 13, 45, 48])