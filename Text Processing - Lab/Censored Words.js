function CensoredWords(string, word){
    let censored = '*'.repeat(word.length);
    let result = string.split(word).join(censored);
    console.log(result);
}
CensoredWords('A small sentence with some words',

'small')