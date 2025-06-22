function ExperienceGaining(array){
    let neededXP = array[0];
    let totalBattles = array[1];
    
    let totalXP = 0;
    let battleCount = 0;

    for (let i = 0; i < totalBattles; i++) {
        let currentBattle = i + 1;
        let gainedXP = array[i + 2];

        if(currentBattle % 3 === 0){
            gainedXP *= 1.15;
        }
        if(currentBattle % 5 === 0){
            gainedXP *= 0.90;
        }
        if(currentBattle % 15 === 0){
            gainedXP *= 1.05;
        }

        totalXP += gainedXP;
        battleCount++;

        if(totalXP >= neededXP){
            console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
            return;
        }
    }
    let remainingXP = (neededXP - totalXP).toFixed(2);
    console.log(`Player was not able to collect the needed experience, ${remainingXP} more needed.`);
}

ExperienceGaining([500,5,50,100,200,100,30])


