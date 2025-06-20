function ListOfProducts(arr){
    let result = arr
        .sort()
        .map((product, index) => `${index + 1}.${product}`);
    for(let product of result){
        console.log(product);
    }
}
ListOfProducts(['Potatoes', 'Tomatoes', 'Onions',

'Apples'])