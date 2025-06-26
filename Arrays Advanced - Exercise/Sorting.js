function Sorting(arr) {
    let sortedArr = arr.slice().sort((a, b) => a - b);
    let result = [];
    let left = 0;
    let right = sortedArr.length - 1;
    while (left <= right) {
        if (left !== right) {
            result.push(sortedArr[right]);
            result.push(sortedArr[left]);
        } else {
            result.push(sortedArr[left]);
        }
        left++;
        right--;
    }
    console.log(result.join(' '));
}
Sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);