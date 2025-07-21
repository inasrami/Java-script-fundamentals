function LegendaryFarming(input) {
    input = input.toLowerCase().split(' ');
    let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    let junk = {};
    let legendary = '';
    for (let i = 0; i < input.length; i += 2) {
        let qty = Number(input[i]);
        let mat = input[i + 1];
        if (keyMaterials.hasOwnProperty(mat)) {
            keyMaterials[mat] += qty;
            if (keyMaterials[mat] >= 250 && legendary === '') {
                keyMaterials[mat] -= 250;
                if (mat === 'shards') legendary = 'Shadowmourne';
                else if (mat === 'fragments') legendary = 'Valanyr';
                else if (mat === 'motes') legendary = 'Dragonwrath';
                break;
            }
        } else {
            if (!junk[mat]) junk[mat] = 0;
            junk[mat] += qty;
        }
    }
    console.log(`${legendary} obtained!`);
    Object.entries(keyMaterials)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(([mat, qty]) => console.log(`${mat}: ${qty}`));
    Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([mat, qty]) => console.log(`${mat}: ${qty}`));
}
LegendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')