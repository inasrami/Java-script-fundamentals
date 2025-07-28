function ExtractEmails(input) {
     let text = Array.isArray(input) ? input[0] : input;
   
    let pattern = /(?<=\s|^)[a-zA-Z0-9]+([.\-_][a-zA-Z0-9]+)*@([a-zA-Z]+(-[a-zA-Z]+)*\.)+[a-zA-Z]+(-[a-zA-Z]+)*/g;

    let matches = text.match(pattern);
    if (matches) {
        matches.forEach(email => console.log(email));
    }
}

ExtractEmails(['Many users abv@bg.bg SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.', 'end']);