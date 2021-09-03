window.onload = () =>{

    employees = initializeTableData();
    populateTable(employees); 

    document.getElementById("add-employee-button").addEventListener("click", addNewEmployee, false);
}

function initializeTableData(){
    employeeNextId = 0
    employees = [
        new Employee(employeeNextId++,'Pop', 'Tudor', 'tudor.pop@principal.com', 'Barbat', '01-10-1998', 'nu'),
        new Employee(employeeNextId++,'Mccann', 'Kathryn', 'email@email.com', 'Femeie', '10-12-1999', 'nu'),
        new Employee(employeeNextId++,'Walter', 'Giselle', 'email@email.com', 'Femeie', '10-12-1999', 'nu'),
        new Employee(employeeNextId++,'Ashley', 'Hugo', 'email@email.com', 'Barbat', '10-12-1999', 'nu'),
        new Employee(employeeNextId++,'Schmitt', 'Jay', 'email@email.com', 'Barbat', '10-12-1999', 'nu'),
    ].sort(compareNames);

    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('employeeNextId', JSON.stringify(employeeNextId));

    return employees;
}

function populateTable(employees){
    tableContent = '';
    employees.forEach(e => {
        tableContent += `<tr employee-id=${e.employeeId}>
            <td>${e.profilePic}</td>
            <td>${e.lastname}</td>
            <td>${e.firstname}</td>
            <td>${e.email}</td>
            <td>${e.sex}</td>
            <td>${e.birthdate}</td>
            <td><span class="fa fa-remove"></span></td>
        </tr>`
    });
    document.getElementById("employees-table-body").innerHTML = tableContent;
}

function addNewEmployee(){
    employeeLastName = document.getElementById("lastname-input").value;
    employeeFristname = document.getElementById("firstname-input").value;
    employeeEmail = document.getElementById("email-input").value;
    employeeSex = document.getElementById("gender-dropdown").value;
    employeeBirthdate = document.getElementById("birthdate-input").value;
    employeeProfilePic = document.getElementById("profile-picture").value;

    employeeId = JSON.parse(localStorage.getItem('employeeNextId'));
    allEmployees = JSON.parse(localStorage.getItem('employees'));

    newEmployee = new Employee(employeeId++, employeeLastName, employeeFristname, employeeEmail, employeeSex, employeeBirthdate, employeeProfilePic);
    allEmployees.push(newEmployee);
    // to do call method to sort items

    localStorage.setItem('employeeNextId', JSON.stringify(employeeId));
    localStorage.setItem('employees', JSON.stringify(allEmployees));
    populateTable(allEmployees);
    

}

// creates new employee object
function Employee(employeeId, lastname, firstname, email, sex, birthdate, profilePic) {
    this.employeeId = employeeId;
    this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
    this.birthdate = birthdate;
    this.sex = sex;
    this.profilePic= profilePic;
}

function compareNames(a, b) {
    if ((a.lastname + a.firstname) < (b.lastname + b.firstname)){
        return -1;
      }
      if ((a.lastname + a.firstname) > (b.lastname + b.firstname)){
        return 1;
      }
      return 0;
}

function compareBirthdate(a, b) {
    if (a.birthdate < b.birthdate){
        return -1;
      }
      if (a.birthdate > b.birthdate){
        return 1;
      }
      return 0;
}

function maintainEmployeeOrder(allEmployees){
    // to do sort list by selected field
}