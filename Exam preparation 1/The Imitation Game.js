function TheImitationGame(data){
    let encryptedMessage = data[0];

    for(let i = 1; i < data.length; i++){
        let command = data[i];
        if(command === 'Decode') {
            console.log(`The decrypted message is: ${encryptedMessage}`);
            break;
        }

        let commandParts = command.split('|');
        let commandName = commandParts[0];

        if(commandName === 'ChangeAll'){
            let substring = commandParts[1];
            let replacement = commandParts[2];

            while(encryptedMessage.indexOf(substring) >= 0){
                encryptedMessage = encryptedMessage.replace(substring, replacement)
            }
            
        } else if(commandName === 'Insert'){
            let index = Number(commandParts[1]);
            let value = commandParts[2];

            let beforeIndex = encryptedMessage.substring(0, index);
            let afterIndex = encryptedMessage.substring(index);

            encryptedMessage = beforeIndex + value + afterIndex;

        }else if(commandName === 'Move'){
            let numberOfLetters = Number(commandParts[1]);

            let firstLetters = encryptedMessage.substring(0, numberOfLetters);
            let backLetters = encryptedMessage.substring(numberOfLetters);

            encryptedMessage = backLetters + firstLetters;
        }

    }
}
TheImitationGame([

'zzHe',

'ChangeAll|z|l',

'Insert|2|o',

'Move|3',

'Decode',

])