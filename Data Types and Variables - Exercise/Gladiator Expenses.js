function GladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetBreaks = Math.floor(lostFights / 2);
    let swordBreaks = Math.floor(lostFights / 3);
    let shieldBreaks = Math.floor(lostFights / 6);
    let armorBreaks = Math.floor(shieldBreaks / 2);

    let totalExpenses = helmetBreaks * helmetPrice + 
                       swordBreaks * swordPrice + 
                       shieldBreaks * shieldPrice + 
                       armorBreaks * armorPrice;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
GladiatorExpenses()