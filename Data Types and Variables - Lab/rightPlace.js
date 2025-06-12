function rightPlace(word, symbol, check){
    let result = word.replace('_', symbol)

    if(result === check){
        console.log('Matched')
    }else {
        console.log('Not Matched')
    }
}
rightPlace('Str_ng', 'I',

'Strong')