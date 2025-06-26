function City(city){
    let keys = Object.keys(city);

    for(let key of keys){
        let value = city[key];
        console.log(`${key} -> ${value}`);
    }
}
City({

name: "Plovdiv",

area: 389,

population: 1162358,

country: "Bulgaria",

postCode: "4000"

})