function Catalogue(productsArr) {
    let products = [];
    for (let entry of productsArr) {
        let [name, price] = entry.split(' : ');
        products.push({ name, price: Number(price) });
    }
    products.sort((a, b) => a.name.localeCompare(b.name));
    let currentInitial = '';
    for (let product of products) {
        let initial = product.name[0];
        if (initial !== currentInitial) {
            currentInitial = initial;
            console.log(currentInitial);
        }
        console.log(`  ${product.name}: ${product.price}`);
    }
}

Catalogue([

'Appricot : 20.4',

'Fridge : 1500',

'TV : 1499',

'Deodorant : 10',

'Boiler : 300',

'Apple : 1.25',

'Anti-Bug Spray : 15',

'T-Shirt : 10'

])