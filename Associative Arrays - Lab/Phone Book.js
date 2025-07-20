function PhoneBook(array){
    let phoneBook = {};
    for (let entry of array) {
        let parsedData = entry.split(' ');

        [Fullname, phoneNumber] = parsedData;

        phoneBook[Fullname] = phoneNumber;

    }

    for(let key in phoneBook){
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}
PhoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])