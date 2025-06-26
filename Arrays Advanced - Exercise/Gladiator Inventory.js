function GladiatorInventory(commands) {
    let inventory = commands[0].split(' ');
    for (let i = 1; i < commands.length; i++) {
        let [action, item] = commands[i].split(' ');
        if (action === 'Buy') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (action === 'Trash') {
            inventory = inventory.filter(equip => equip !== item);
        } else if (action === 'Repair') {
            let idx = inventory.indexOf(item);
            if (idx !== -1) {
                inventory.splice(idx, 1);
                inventory.push(item);
            }
        } else if (action === 'Upgrade') {
            let [equip, upgrade] = item.split('-');
            let idx = inventory.indexOf(equip);
            if (idx !== -1) {
                inventory.splice(idx + 1, 0, `${equip}:${upgrade}`);
            }
        }
    }
    console.log(inventory.join(' '));
}

GladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]);