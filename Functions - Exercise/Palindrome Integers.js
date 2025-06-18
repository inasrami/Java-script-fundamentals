function PalindromeIntegers(arr) {
    
    for (let num of arr) {
        
        let numStr = num.toString();
        
        let reversed = numStr.split('').reverse().join('');
        
        console.log(numStr === reversed);
    }
}


PalindromeIntegers([123,323,421,121]);
