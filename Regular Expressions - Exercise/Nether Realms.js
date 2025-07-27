function NetherRealms(input) {
    
    let demons = input.split(/\s*,\s*/).filter(Boolean);
    let result = {};

    demons.forEach(function (demonName) {
        let health = calculateHealth(demonName);
        let damage = calculateDamage(demonName);
        result[demonName] = [health, damage];
    });

    Object.entries(result)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(el => {
            console.log(`${el[0]} - ${el[1][0]} health, ${el[1][1].toFixed(2)} damage`);
        });

    function calculateHealth(demonName) {
        
        let healthChars = demonName.split('')
            .filter(char => /[^0-9+\-*/.]/.test(char));
        return healthChars.reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
    }

    function calculateDamage(demonName) {
        let damage = 0;
        
        let pattern = /[+-]?\d+(\.\d+)?/g;
        let numbers = demonName.match(pattern);
        if (numbers) {
            for (const num of numbers) {
                damage += Number(num);
            }
        }
        
        for (const char of demonName) {
            if (char === '*') {
                damage *= 2;
            } else if (char === '/') {
                damage /= 2;
            }
        }
        return damage;
    }
}


NetherRealms('M3ph-0.5s-0.5t0.0*')