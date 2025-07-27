function Race(input){
    let participants = input.shift().split(', ');
    let distances = {};
    let nameRegex = /[A-Za-z]/g;
    let digitRegex = /\d/g;

    for(let line of input){
        if(line === 'end of race') break;
        let nameMatch = line.match(nameRegex);
        let digitMatch = line.match(digitRegex);

        if (!nameMatch || !digitMatch) continue;

        let name = nameMatch.join('');
        let distance = digitMatch.map(Number).reduce((a, b) => a + b, 0);

        if(participants.includes(name)){
            if(!distances[name]){
                distances[name] = 0;
            }
            distances[name] += distance;
        }
    }

    let sorted = Object.entries(distances)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    let places = ['1st', '2nd', '3rd'];
    sorted.forEach(([name], idx) => {
        console.log(`${places[idx]} place: ${name}`);
    });
}
Race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);