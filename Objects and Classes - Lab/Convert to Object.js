function ConvertToObject(jsonStr){
    let person = JSON.parse(jsonStr);
    let keys = Object.keys(person);
    for(let key of keys){
        let value = person[key];
        console.log(`${key}: ${value}`);
    }
}
ConvertToObject('{"name": "George", "age": 40, "town": "Sofia"}')