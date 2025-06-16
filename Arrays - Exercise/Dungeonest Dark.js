function DungeonestDark(input) {
    let rooms = input.split('|');
    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    let isAlive = true;

    for (let room of rooms) {
        roomCounter++;
        let [item, value] = room.split(' ');
        value = Number(value);

        if (item === 'potion') {
            let healedFor = Math.min(100 - health, value);
            health += healedFor;
            console.log(`You healed for ${healedFor} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (item === 'chest') {
            coins += value;
            console.log(`You found ${value} coins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${roomCounter}`);
                isAlive = false;
                break;
            }
        }
    }

    if (isAlive) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}


DungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// DungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");