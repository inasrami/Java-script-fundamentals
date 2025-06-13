function TownInfo(name, population, area){
    let isCorrect = true;
    if (name.length < 3){
        console.log('Town name must be at least 3 characters!');
        isCorrect = false; 
    }

    if(population < 0){
        console.log('Population must be a positive number!');
        isCorrect = false;
    }

    if(area < 0){
        console.log('Area must be a positive number!');
        isCorrect = false;
    }

    if(isCorrect){
        console.log(`Town ${name} has population of ${population} and area ${area} square km.`)
    }

}
TownInfo('Sofia',

1286383,

492)