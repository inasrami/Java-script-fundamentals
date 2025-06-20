function SmallestTwoNumbers(arr){
    arr = arr.map(Number);
    arr.sort((a, b) => a - b);
    let smallestTwo = arr.slice(0, 2);
    console.log(smallestTwo.join(' '));
}
SmallestTwoNumbers([30, 15, 50, 5])