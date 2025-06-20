function LastKNumbersSequance(n, k){
    let result = [1];
    for(let i = 1; i < n; i++){
        let startindex = i - k;
        
        if(startindex < 0){
            startindex = 0;
        }

        let previousThreeNumbers = result.slice(startindex, i);

        let sum = 0;
        for ( let number of previousThreeNumbers){
            sum += number;
        }

        result[i] = sum;
    }
    console.log(result.join(" "));
}
LastKNumbersSequance(6, 3)