function bitcoinMining(goldMinedPerDay) {
    const goldPricePerGram = 67.51;
    const bitcoinPrice = 11949.16;

    let totalMoney = 0;
    let bitcoinsBought = 0;
    let firstBitcoinDay = 0;

    for (let day = 0; day < goldMinedPerDay.length; day++) {
        let goldToday = goldMinedPerDay[day];

        // Every 3rd day, 30% of gold is stolen
        if ((day + 1) % 3 === 0) {
            goldToday *= 0.7;
        }

        totalMoney += goldToday * goldPricePerGram;

        // Try to buy bitcoins while we have enough money
        while (totalMoney >= bitcoinPrice) {
            bitcoinsBought++;
            totalMoney -= bitcoinPrice;
            if (bitcoinsBought === 1) {
                firstBitcoinDay = day + 1; // days are 1-indexed
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300])