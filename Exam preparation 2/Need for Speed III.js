function needForSeed(input) {
    let n = Number(input.shift());
    let cars = {};

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input[i].split('|');
        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        };
    }

    for (let i = n; i < input.length; i++) {
        let line = input[i];
        if (line === 'Stop') break;

        let [command, car, param1, param2] = line.split(' : ');

        if (command === 'Drive') {
            let distance = Number(param1);
            let fuelNeeded = Number(param2);

            if (cars[car].fuel < fuelNeeded) {
                console.log("Not enough fuel to make that ride");
            } else {
                cars[car].mileage += distance;
                cars[car].fuel -= fuelNeeded;
                console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);

                if (cars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            }

        } else if (command === 'Refuel') {
            let fuelToAdd = Number(param1);
            let currentFuel = cars[car].fuel;
            let addedFuel = Math.min(fuelToAdd, 75 - currentFuel);
            cars[car].fuel += addedFuel;
            console.log(`${car} refueled with ${addedFuel} liters`);

        } else if (command === 'Revert') {
            let kilometers = Number(param1);
            cars[car].mileage -= kilometers;

            if (cars[car].mileage < 10000) {
                cars[car].mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }

    
    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }
}
needForSeed([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop'
]);
