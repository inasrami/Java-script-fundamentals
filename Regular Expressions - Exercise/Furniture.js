function Furniture(inputLines){
    let pattern = />>([A-Z][A-Za-z\s]*)<<(\d+(\.\d+)?)!(\d+)/;
    let furniture = [];
    let total = 0;

    for(let line of inputLines){
        if(line === 'Purchase') break;

        let match = line.match(pattern);
        if(match){
            let name = match[1];
            let price = parseFloat(match[2]);
            let quantity = parseInt(match[4]);
            furniture.push(name);
            total += price * quantity;
        }
    }
    console.log('Bought furniture:');
    furniture.forEach(item => console.log(item));
    console.log(`Total money spend: ${total.toFixed(2)}`);
}
Furniture(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase'])