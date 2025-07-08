function Employee(employeeNames) {
    let employees = [];
    for (let name of employeeNames) {
        let employee = {
            name: name,
            personalNumber: name.length
        };
        employees.push(employee);
    }
    for (let emp of employees) {
        console.log(`Name: ${emp.name} -- Personal Number: ${emp.personalNumber}`);
    }
}

Employee([

'Silas Butler',

'Adnaan Buckley',

'Juan Peterson',

'Brendan Villarreal'

])
