function SortAnArrayBy2Criteria(array){
    array.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    });
    console.log(array.join('\n'));
}
SortAnArrayBy2Criteria(['alpha',

'beta',

'gamma'])