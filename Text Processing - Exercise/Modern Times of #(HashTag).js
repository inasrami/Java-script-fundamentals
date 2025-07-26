function HashTag(text){
    let words = text.split(' ');
    for(let word of words){
        if(word.startsWith('#')){
            let clearWord = word.slice(1);
            if(clearWord.length > 0 && clearWord.split('').every(c => (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z'))){
                console.log(clearWord);
            }
        }
    }
}
HashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')