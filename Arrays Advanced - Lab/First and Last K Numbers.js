function FirstAndLastKNumbers(arr){
    let k = arr.shift();
    let firstKElements = arr.slice(0, k);
    let lastKElements = arr.slice(arr.length - k);

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}
FirstAndLastKNumbers([2,

7, 8, 9])