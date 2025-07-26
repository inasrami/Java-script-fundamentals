function PascalCaseSplitter(str){
    let words = str.split(/(?=[A-Z])/);
    console.log(words.join(', '));
}
PascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')