function StoreProvision(arr1, arr2) {
    let store = {};

    for (let i = 0; i < arr1.length; i += 2) {
        let product = arr1[i];
        let quantity = Number(arr1[i + 1]);
        if (!store[product]) {
            store[product] = 0;
        }
        store[product] += quantity;
    }

    for (let i = 0; i < arr2.length; i += 2) {
        let product = arr2[i];
        let quantity = Number(arr2[i + 1]);
        if (!store[product]) {
            store[product] = 0;
        }
        store[product] += quantity;
    }

    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}
StoreProvision([

'Chips', '5', 'CocaCola', '9', 'Bananas',

'14', 'Pasta', '4', 'Beer', '2'

],

[

'Flour', '44', 'Oil', '12', 'Pasta', '7',

'Tomatoes', '70', 'Bananas', '30'

])

// function Store(currentStock, deliveryStock) {
//     let store = {};
//     for(let i = 0; i < currentStock.length; i += 2){
//         let product = currentStock[i];
//         let quantity = Number(currentStock[i + 1]);
//         store[product] = quantity;
//     }
//     for(let i = 0; i <deliveryStock.length; i += 2){
//         let product = deliveryStock[i];
//         let quantity = Number(currentStock[i + 1]);
//         if(store.hasOwnProperty(product)){
//             store[product] += quantity;
//         } else {
//             store[product] = quantity;
//         }
//     }

//     for(let product in store){
//         console.log(`${product} -> ${store[product]}`)
//     }
// }
// Store([

// 'Chips', '5', 'CocaCola', '9', 'Bananas',

// '14', 'Pasta', '4', 'Beer', '2'

// ],

// [

// 'Flour', '44', 'Oil', '12', 'Pasta', '7',

// 'Tomatoes', '70', 'Bananas', '30'

// ])