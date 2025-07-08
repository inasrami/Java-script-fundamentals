function Inventory(input){
    let heroes = [];
    for(let line of input){
        let [name, levelStr, itemsStr]= line.split(' / ');
        let level = Number(levelStr);
        let items = itemsStr ? itemsStr.split(', ').filter(i => i) : [];
        heroes.push({name, level, items});
    }
    heroes.sort((a , b) => a.level - b.level);
    for(let hero of heroes){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}
Inventory([

'Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'

])