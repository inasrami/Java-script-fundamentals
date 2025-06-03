function TriangleOfNumbers(n){
    let result = '';
    for(let i = 0; i <= n; i++){
        result = '';
        for(let j = 0; j < i; j++){
            result += i + ' ';
        }
        console.log(result) 
    }
    
}
TriangleOfNumbers(5)