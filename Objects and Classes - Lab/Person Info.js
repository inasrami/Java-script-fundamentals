function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: Number(age)
    };
}

createPerson("Peter", "Pan", "20");