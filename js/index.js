const TABLE_DATA = 'employees';
const TABLE_ROW_NEXT_ID = 'employeeNextId';


window.onload = () =>{

    employees = initializeTableData();
    populateTable(employees); 

    document.getElementById("add-employee-button").addEventListener("click", addNewEmployee, false);
    setDelete();
}

function initializeTableData(){

    employees = JSON.parse(localStorage.getItem(TABLE_DATA));
    if (employees == undefined){
        employeeNextId = 0
        employees = [
            new Employee(employeeNextId++,'Pop', 'Tudor', 'tudor.pop@principal.com', 'Barbat', '1998-10-01', 'nu'),
            new Employee(employeeNextId++,'Mccann', 'Kathryn', 'email@email.com', 'Femeie', '1999-12-10', 'nu'),
            new Employee(employeeNextId++,'Walter', 'Giselle', 'email@email.com', 'Femeie', '1999-12-10', 'nu'),
            new Employee(employeeNextId++,'Ashley', 'Hugo', 'email@email.com', 'Barbat', '1999-12-10', 'nu'),
            new Employee(employeeNextId++,'Schmitt', 'Jay', 'email@email.com', 'Barbat', '1999-12-10', 'nu'),
        ].sort(compareNames);
        // to do call method to sort items

        localStorage.setItem(TABLE_DATA, JSON.stringify(employees));
        localStorage.setItem(TABLE_ROW_NEXT_ID, JSON.stringify(employeeNextId));
    }

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
            <td><span class="delete-row fa fa-remove"></span></td>
        </tr>`
    });
    document.getElementById("employees-table-body").innerHTML = tableContent;
}

function addNewEmployee(){
    modal = document.getElementById("add-employee-modal");

    employeeLastName = document.getElementById("lastname-input").value;
    employeeFristname = document.getElementById("firstname-input").value;
    employeeEmail = document.getElementById("email-input").value;
    employeeSex = document.getElementById("gender-dropdown").value;
    employeeBirthdate = document.getElementById("birthdate-input").value;
    employeeProfilePic = document.getElementById("profile-picture").value;

    employeeId = JSON.parse(localStorage.getItem(TABLE_ROW_NEXT_ID));
    allEmployees = JSON.parse(localStorage.getItem(TABLE_DATA));

    newEmployee = new Employee(employeeId++, employeeLastName, employeeFristname, employeeEmail, employeeSex, employeeBirthdate, employeeProfilePic);
    allEmployees.push(newEmployee);
    // to do call method to sort items

    localStorage.setItem(TABLE_ROW_NEXT_ID, JSON.stringify(employeeId));
    localStorage.setItem(TABLE_DATA, JSON.stringify(allEmployees));
    populateTable(allEmployees);
    setDelete();

    document.body.className = document.body.className.replace("modal-open","");
    modal.classList.remove("show");
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden","true");
    modal.removeAttribute("aria-modal");
    modal.style.display = "none";
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

function setDelete() {
    document.querySelectorAll(".delete-row").forEach(e =>{
        e.addEventListener("click", deleteEmployeeRow, false);
    });
}

function deleteEmployeeRow(htmlDeleteElement){
    rowToBeDeleted = htmlDeleteElement.target.closest("tr");

    employeeToDeleteId = rowToBeDeleted.getAttribute("employee-id");
    rowToBeDeleted.remove();

    allEmployees = JSON.parse(localStorage.getItem(TABLE_DATA));
    allEmployees = allEmployees.filter(e => e.employeeId != employeeToDeleteId);

    localStorage.setItem(TABLE_DATA, JSON.stringify(allEmployees));
}

function maintainEmployeeOrder(allEmployees){
    // to do sort list by selected field
}