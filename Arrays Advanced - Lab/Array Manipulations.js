function solve(input){
    let numbers = input
        .shift()
        .split(' ')
        .map(Number);

    for(let command of input){
        let commandParts = command.split(' ');
        let commandName = commandParts.shift();

        if(commandName === 'Add'){
            let value = Number(commandParts[0]);
            numbers.push(value);
        } else if(commandName === 'Remove'){
            let value = Number(commandParts[0]);
            numbers = numbers.filter(num => num !== value);
        } else if(commandName === 'RemoveAt'){
            let index = Number(commandParts[0]);
            numbers.splice(index, 1);
        } else if(commandName === 'Insert'){
            let value = Number(commandParts[0]);
            let index = Number(commandParts[1]);
            numbers.splice(index, 0, value);
        }
    }
    console.log(numbers.join(' '));
}

solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);