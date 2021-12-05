const getEmployerRole = (employeeName, employees) => {
    for (let employee in employees){
        if (employeeName === employees[employee].name){
            return employees[employee].role;
        }
    }
};

module.exports = getEmployerRole;
