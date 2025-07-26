function StringSubstring(search, sentence){
    let words = sentence.toLowerCase().split(' ');
    if(words.includes(search.toLowerCase())){
        console.log(search);
    }else{
        console.log(`${search} not found!`)
    }
}
StringSubstring('javascript', 'JavaScript is the best programming language')