function Meetings(array){
    let Meetings = {};
    for (let entry of array) {
        let parsedData = entry.split(' ');

        [weekday, fullName] = parsedData;

        if(Meetings.hasOwnProperty(weekday)){
            console.log(`Conflict on ${weekday}!`);
        } else {
            Meetings[weekday] = fullName;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for(let key in Meetings){
        console.log(`${key} -> ${Meetings[key]}`);
    }
}
Meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])