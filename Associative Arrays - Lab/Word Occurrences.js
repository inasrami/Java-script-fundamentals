function WordOccurrences(input){
    let map = new Map();

    for(let word of input){
        if(map.has(word)){  
            let currentCount = map.get(word);
            currentCount++;

            map.set(word, currentCount);
        }else {
            map.set(word, 1);
        }
    }
    let sorted = Array.from(map)
    .sort((firstPair, secondPair) => {
        let firstValue = firstPair[1];
        let secondValue = secondPair[1];

        return secondValue - firstValue;
    });
    for(let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`)
    }
}
WordOccurrences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])