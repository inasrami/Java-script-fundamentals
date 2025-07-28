function Pirates(data) {
    let cities = {};
    let sailIndex = data.indexOf('Sail');

    for (let i = 0; i < sailIndex; i++) {
        let [city, population, gold] = data[i].split('||');
        if (!cities[city]) {
            cities[city] = { population: 0, gold: 0, order: i };
        }
        cities[city].population += Number(population);
        cities[city].gold += Number(gold);
    }

    for (let i = sailIndex + 1; i < data.length; i++) {
        if (data[i] === 'End') break;

        let [command, ...params] = data[i].split('=>');

        if (command === 'Plunder') {
            let [town, people, gold] = params;
            people = Number(people);
            gold = Number(gold);

            cities[town].population -= people;
            cities[town].gold -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (cities[town].population <= 0 || cities[town].gold <= 0) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            }
        }
        else if (command === 'Prosper') {
            let [town, gold] = params;
            gold = Number(gold);

            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
                continue;
            }

            cities[town].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
        }
    }

    
    let cityEntries = Object.entries(cities);
    if (cityEntries.length > 0) {
        console.log(`Ahoy, Captain! There are ${cityEntries.length} wealthy settlements to go to:`);
        cityEntries
            .sort((a, b) => a[1].order - b[1].order)
            .forEach(([city, data]) => {
                console.log(`${city} -> Population: ${data.population} citizens, Gold: ${data.gold} kg`);
            });
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

Pirates(["Tortuga||345000||1250",

"Santo Domingo||240000||630",

"Havana||410000||1100",

"Sail",

"Plunder=>Tortuga=>75000=>380",

"Prosper=>Santo Domingo=>180",

"End"])

// Pirates(["Nassau||95000||1000",

// "San Juan||930000||1250",

// "Campeche||270000||690",

// "Port Royal||320000||1000",

// "Port Royal||100000||2000",

// "Sail",

// "Prosper=>Port Royal=>-200",

// "Plunder=>Nassau=>94000=>750",

// "Plunder=>Nassau=>1000=>150",

// "Plunder=>Campeche=>150000=>690",

// "End"])