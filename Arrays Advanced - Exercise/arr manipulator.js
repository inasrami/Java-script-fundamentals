function ArrayManipulator(numbers, commands) {
    for (let command of commands) {
        let [action, ...args] = command.split(' ');
        switch (action) {
            case 'add': {
                let index = Number(args[0]);
                let element = Number(args[1]);
                numbers.splice(index, 0, element);
                break;
            }
            case 'addMany': {
                let index = Number(args[0]);
                let elements = args.slice(1).map(Number);
                numbers.splice(index, 0, ...elements);
                break;
            }
            case 'contains': {
                let element = Number(args[0]);
                console.log(numbers.indexOf(element));
                break;
            }
            case 'remove': {
                let index = Number(args[0]);
                numbers.splice(index, 1);
                break;
            }
            case 'shift': {
                let positions = Number(args[0]) % numbers.length;
                let shifted = numbers.splice(0, positions);
                numbers.push(...shifted);
                break;
            }
            case 'sumPairs': {
                let summed = [];
                for (let i = 0; i < numbers.length; i += 2) {
                    let first = numbers[i];
                    let second = numbers[i + 1] || 0;
                    summed.push(first + second);
                }
                numbers = summed;
                break;
            }
            case 'print': {
                console.log(`[ ${numbers.join(', ')} ]`);
                return;
            }
        }
    }
}

ArrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);