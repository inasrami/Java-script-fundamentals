function RevealWords(wordList, templateString){
     searcedWordsArr = wordList.split(', ');
    let searchedWords = {};
    for(let word of searcedWordsArr){
        let key = '*'.repeat(word.length);
        searchedWords[key] = word;
    }
    let sentence = templateString.split(' ');
    for(let i = 0; i < sentence.length; i++){
        let currentWord = sentence[i];
        if(searchedWords.hasOwnProperty(currentWord)){
            sentence[i] = searchedWords[currentWord];
        }
    }
    console.log(sentence.join(' '));
}
RevealWords('great', 'softuni is ***** place for learning new programming languages')
