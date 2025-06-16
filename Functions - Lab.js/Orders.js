function Orders(order, price){
    let result = 0;
    switch (order) {
        case 'coffee':
            result = price * 1.50;
            break;
        case 'water':
            result = price * 1.00;
            break;
        case 'coke':
            result = price * 1.40;
            break;
        case 'snacks':
            result = price * 2.00;
            break;
       
    }
    console.log(result.toFixed(2));
}
Orders()