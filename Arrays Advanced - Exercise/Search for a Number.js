function SearchForANumber(array1, array2){
    let count = array2[0];
    let deleteCount = array2[1];
    let searchNumber = array2[2];

    let newArray = array1.slice(0, count);

    newArray.splice(0, deleteCount);

    let occurrences = newArray.filter(num => num === searchNumber).length;

    console.log(`Number ${searchNumber} occurs ${occurrences} times.`);
}
SearchForANumber([5, 2, 3, 4, 1, 6],

[5, 2, 3])