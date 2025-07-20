function AddressBookk(array){
    let AddressBook = {};
    for(let entry of array) {
        let parsedData = entry.split(':');
        let [Fullname, address] = parsedData;

        if(AddressBook.hasOwnProperty(Fullname)){
            AddressBook[Fullname] = address;
        } else {
            AddressBook[Fullname] = address;
        }
    }
    let sortedKeys = Object.keys(AddressBook).sort();
    for(let key of sortedKeys){
    console.log(`${key} -> ${AddressBook[key]}`);
    }

}
AddressBookk(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])