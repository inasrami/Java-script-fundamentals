function CompanyUsers(input) {
    let companyMap = new Map();

    for (let line of input) {
        let [company, employeeId] = line.split(' -> ');
        if (!companyMap.has(company)) {
            companyMap.set(company, new Set());
        }
        companyMap.get(company).add(employeeId);
    }

    let sortedCompanies = Array.from(companyMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employees] of sortedCompanies) {
        console.log(company);
        for (let id of employees) {
            console.log(`-- ${id}`);
        }
    }
}
CompanyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])