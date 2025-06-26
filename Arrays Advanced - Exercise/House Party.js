function HouseParty(array){
    let guests = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');
        let name = command[0];

        if (command[2] === 'going!') {
            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else if (command[2] === 'not') {
            if (guests.includes(name)) {
                guests.splice(guests.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guests.join('\n'));
}
HouseParty(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])