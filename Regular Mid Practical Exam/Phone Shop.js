function PhoneShop(phoneCommands) {
    let phoneInventory = phoneCommands[0].split(', ');
    for (let cmdIndex = 1; cmdIndex < phoneCommands.length; cmdIndex++) {
        let currentCommand = phoneCommands[cmdIndex];
        if (currentCommand === 'End') break;
        let [action, details] = currentCommand.split(' - ');
        if (action === 'Add') {
            if (!phoneInventory.includes(details)) {
                phoneInventory.push(details);
            }
        } else if (action === 'Remove') {
            phoneInventory = phoneInventory.filter(model => model !== details);
        } else if (action === 'Bonus phone') {
            let [existingModel, bonusModel] = details.split(':');
            let modelIndex = phoneInventory.indexOf(existingModel);
            if (modelIndex !== -1) {
                phoneInventory.splice(modelIndex + 1, 0, bonusModel);
            }
        } else if (action === 'Last') {
            let modelIndex = phoneInventory.indexOf(details);
            if (modelIndex !== -1) {
                phoneInventory.splice(modelIndex, 1);
                phoneInventory.push(details);
            }
        }
    }
    console.log(phoneInventory.join(', '));
}

PhoneShop(["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"]);