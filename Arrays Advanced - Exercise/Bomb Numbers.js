function BombNumbers(array1, array2){
    let bombNumber = array2[0];
    let power = array2[1];
    
    while (array1.includes(bombNumber)) {
        let index = array1.indexOf(bombNumber);
        let start = Math.max(0, index - power);
        let end = Math.min(array1.length - 1, index + power);
        
        array1.splice(start, end - start + 1);
    }
    
    console.log(array1.reduce((a, b) => a + b, 0));
}
BombNumbers([1, 2, 2, 4, 2, 2,

2, 9],

[4, 2])