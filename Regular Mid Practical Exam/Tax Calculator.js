function TaxCalculator(inputArr) {
    let vehicleList = inputArr[0].split('>>');
    let agencyRevenue = 0;

    for (let carEntry of vehicleList) {
        let [carType, usageYearsStr, mileageStr] = carEntry.trim().split(' ');
        let usageYears = Number(usageYearsStr);
        let mileage = Number(mileageStr);

        let carTaxInfo = getCarTaxInfo(carType);
        if (!carTaxInfo) {
            console.log('Invalid car type.');
            continue;
        }
        let thisCarTax = computeCarTax(carTaxInfo, usageYears, mileage);
        agencyRevenue += thisCarTax;
        console.log(`A ${carType} car will pay ${thisCarTax.toFixed(2)} euros in taxes.`);
    }
    console.log(`The National Revenue Agency will collect ${agencyRevenue.toFixed(2)} euros in taxes.`);

    function getCarTaxInfo(carType) {
        let carTaxRules = {
            family: { base: 50, decline: 5, kmRate: 12, kmThreshold: 3000 },
            heavyDuty: { base: 80, decline: 8, kmRate: 14, kmThreshold: 9000 },
            sports: { base: 100, decline: 9, kmRate: 18, kmThreshold: 2000 }
        };
        return carTaxRules[carType];
    }

    function computeCarTax(carTaxInfo, usageYears, mileage) {
        let base = carTaxInfo.base - (usageYears * carTaxInfo.decline);
        let kmComponent = Math.floor(mileage / carTaxInfo.kmThreshold) * carTaxInfo.kmRate;
        let total = base + kmComponent;
        return Math.max(total, 0);
    }
}
TaxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);