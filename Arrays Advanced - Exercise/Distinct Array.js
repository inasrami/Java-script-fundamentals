function DistinctArray(array){
    let repeatingElements = [];

    for(let i = 0; i < array.length; i++) {
        if (repeatingElements.includes(array[i])) {
            array.splice(i, 1);
            i--; // Adjust index after removal
        } else {
            repeatingElements.push(array[i]);
        }
    }
    console.log(repeatingElements.join(' '));
}
DistinctArray([1, 2, 3, 4])
DistinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])