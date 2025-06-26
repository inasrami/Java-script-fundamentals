function Train(array){
    let wagon = array[0].split(' ').map(Number);
    let maxCapacity = Number(array[1]);
    for (let i = 2; i < array.length; i++) {
        let command = array[i].split(' ');
        if (command[0] === 'Add') {
            let passengers = Number(command[1]);
            wagon.push(passengers);
        } else {
            let passengers = Number(command[0]);
            for (let j = 0; j < wagon.length; j++) {
                if (wagon[j] + passengers <= maxCapacity) {
                    wagon[j] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagon.join(' '));
}
Train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])