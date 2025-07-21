function ArenaTier(input) {
    let gladiators = {};
    for (let line of input) {
        if (line === 'Ave Cesar') break;
        if (line.includes('->')) {
            let [name, technique, skill] = line.split(' -> ');
            skill = Number(skill);
            if (!gladiators[name]) gladiators[name] = {};
            if (!gladiators[name][technique] || gladiators[name][technique] < skill) {
                gladiators[name][technique] = skill;
            }
        } else if (line.includes('vs')) {
            let [first, second] = line.split(' vs ');
            if (gladiators[first] && gladiators[second]) {
                let firstTechs = Object.keys(gladiators[first]);
                let secondTechs = Object.keys(gladiators[second]);
                let common = firstTechs.find(t => secondTechs.includes(t));
                if (common) {
                    let firstSkill = Object.values(gladiators[first]).reduce((a, b) => a + b, 0);
                    let secondSkill = Object.values(gladiators[second]).reduce((a, b) => a + b, 0);
                    if (firstSkill > secondSkill) {
                        delete gladiators[second];
                    } else if (secondSkill > firstSkill) {
                        delete gladiators[first];
                    }
                }
            }
        }
    }
    let sorted = Object.entries(gladiators)
        .map(([name, techs]) => [name, techs, Object.values(techs).reduce((a, b) => a + b, 0)])
        .sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]));
    for (let [name, techs, totalSkill] of sorted) {
        console.log(`${name}: ${totalSkill} skill`);
        Object.entries(techs)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(([tech, skill]) => {
                console.log(`- ${tech} <!> ${skill}`);
            });
    }
}
ArenaTier([

'Peter -> BattleCry -> 400',

'Alex -> PowerPunch -> 300',

'Stefan -> Duck -> 200',

'Stefan -> Tiger -> 250',

'Ave Cesar'

]
)