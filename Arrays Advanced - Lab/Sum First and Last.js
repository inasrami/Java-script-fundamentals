function SumFirstAndLast(arr){
    function sumFirstAndLast(arr){
        let firstElement = Number(arr[0]);
        let lastElement = Number(arr[arr.length - 1]);
        return firstElement + lastElement;
    }
    let result = sumFirstAndLast(arr);
    console.log(result);
}
SumFirstAndLast(['20', '30', '40'])