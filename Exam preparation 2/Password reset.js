function passwordReset(commands) {
    let password = commands[0];

    for (let i = 1; i < commands.length; i++) {
        let commandLine = commands[i];

        if (commandLine === "Done") {
            break;
        }

        let parts = commandLine.split(" ");
        let action = parts[0];

        if (action === "TakeOdd") {
            let newPassword = '';
            for (let j = 1; j < password.length; j += 2) {
                newPassword += password[j];
            }
            password = newPassword;
            console.log(password);

        } else if (action === "Cut") {
            let index = Number(parts[1]);
            let length = Number(parts[2]);
            let substring = password.substring(index, index + length);
            password = password.replace(substring, '');
            console.log(password);

        } else if (action === "Substitute") {
            let substr = parts[1];
            let substitute = parts[2];

            if (password.includes(substr)) {
                let regex = new RegExp(substr, 'g');
                password = password.replace(regex, substitute);
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }

    console.log(`Your password is: ${password}`);
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);