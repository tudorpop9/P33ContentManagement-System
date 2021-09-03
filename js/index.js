window.onload = () =>{

    employees = initializeTableData();
    populateTable(employees); 

    document.getElementById("add-employee-button").addEventListener("click", function() {
        console.log("click, ma");
    }, false);
}

function initializeTableData(){
    employees = [
        new Employee('Pop', 'Tudor', 'tudor.pop@principal.com', 'Barbat', 'nu'),
        new Employee('Mccann', 'Kathryn', 'email@email.com', 'Femeie', 'nu'),
        new Employee('Walter', 'Giselle', 'email@email.com', 'Femeie', 'nu'),
        new Employee('Ashley', 'Hugo', 'email@email.com', 'Barbat', 'nu'),
        new Employee('Schmitt', 'Jay', 'email@email.com', 'Barbat', 'nu'),
    ].sort((a, b)=>{
        if ( a.lastname < b.lastname ){
            return -1;
          }
          if ( a.lastname > b.lastname ){
            return 1;
          }
          return 0;
    });
    localStorage.setItem('employees', JSON.stringify(employees));

    return employees;
}

function populateTable(employees){
    tableContent = document.getElementById("employees-table-body").innerHTML;
    employees.forEach(e => {
        tableContent += `<tr>
            <td>${e.profilePic}</td>
            <td>${e.lastname}</td>
            <td>${e.firstname}</td>
            <td>${e.email}</td>
            <td>${e.sex}</td>
            <td>notfoud</td>
            <td><span class="fa fa-remove"></span></td>
        </tr>`
    });
    document.getElementById("employees-table-body").innerHTML = tableContent;
}

// creates new employee object, can be used with 
function Employee(lastname, firstname, email, sex, profilePic) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
    this.sex = sex;
    this.profilePic= profilePic;
}