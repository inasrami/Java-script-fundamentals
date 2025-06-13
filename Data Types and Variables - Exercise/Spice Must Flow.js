function SpiceMustFlow(startingYield) {
    let totalSpice = 0;
    let daysOperated = 0;
    let currentYield = startingYield;

    while (currentYield >= 100) {
        totalSpice += currentYield;
        daysOperated++;
        
        if (totalSpice >= 26) {
            totalSpice -= 26;
        } else {
            totalSpice = 0;
        }
        currentYield -= 10;
    }

    
    if (totalSpice >= 26) {
        totalSpice -= 26;
    } else {
        totalSpice = 0;
    }

    console.log(daysOperated);
    console.log(totalSpice);
}

SpiceMustFlow()