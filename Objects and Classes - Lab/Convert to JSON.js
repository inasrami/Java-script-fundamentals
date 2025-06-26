function ConvertToJSON(name, lastName, hairColor){
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    };

    let jsonStr = JSON.stringify(person);
    console.log(jsonStr);
}
ConvertToJSON('George', 'Jones',

'Brown')