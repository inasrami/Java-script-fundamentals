function SchoolGrades(input){
    let map = new Map();

    for(let data of input){
        let [name, ...grades] = data.split(' ');
        
        grades = grades.map(Number);

        if(map.has(name)){
            let currentGrades = map.get(name);

            currentGrades = currentGrades.concat(grades);
            map.set(name, currentGrades);
        } else {
            map.set(name, grades)
        }
    }
    let averageGrades = new Map();

    for(let [name, grades] of map){
        let sum = 0;
        for(let grade of grades){
            sum += grade;
        }
        let average = sum / grades.length;

        averageGrades.set(name, average.toFixed(2));
    }
    let sortedResult = Array.from(averageGrades)
    .sort((a, b) => a[0].localeCompare(b[0]));

    for(let [name, averageGrade] of sortedResult){
        console.log(`${name}: ${averageGrade}`)
    }

}
SchoolGrades(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])