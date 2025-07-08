function Towns(array){
    let towns = [];
    for (let entry of array) {
        let [name, latitude, longitude] = entry.split(' | ');
        let town = {
            Town: name,
            Latitude: Number(latitude).toFixed(2),
            Longitude: Number(longitude).toFixed(2)
        };
        towns.push(town);
    }
    for (let town of towns) {
        console.log(`{ town: '${town.Town}', latitude: '${town.Latitude}', longitude: '${town.Longitude}' }`);
    }
}
Towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])