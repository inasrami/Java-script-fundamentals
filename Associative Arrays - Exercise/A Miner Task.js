function AMinerTask(input){
    let resourcesArr = {};
    for(let i = 0; i < input.length; i += 2){
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        resourcesArr[resource]=resourcesArr[resource] || 0;
        resourcesArr[resource] += quantity;
    }
    
    for(let res in resourcesArr){
        console.log(`${res} -> ${resourcesArr[res]}`);
    }

}
AMinerTask([

'Gold',

'155',

'Silver',

'10',

'Copper',

'17'

])