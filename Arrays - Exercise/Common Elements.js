function CommonElements(arr1, arr2){
    for(let firstEl of arr1){
        for(let secondEl of arr2){
            if(firstEl === secondEl){
                console.log(firstEl);
            }
        }

    }
}   
CommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])