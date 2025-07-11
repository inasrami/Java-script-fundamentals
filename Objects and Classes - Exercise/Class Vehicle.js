function ClassVehicle(){
class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        };
        this.fuel = fuel;
    }
    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

// Example test:
// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel); // 100
// console.log(vehicle.parts.quality); // 600
}
ClassVehicle()