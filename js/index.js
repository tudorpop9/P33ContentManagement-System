
const TABLE_DATA = 'employees';
const TABLE_ROW_NEXT_ID = 'employeeNextId';
const MALE_PICTURE_PLACEHOLDER = "data:image/png;base64,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";
const FEMALE_PICTURE_PLACEHOLDER = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAZABkAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAGdAZADASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQFAgMGAf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAerHfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABukSwVrlFQttZWpcbTEIAAAAAAAAAAAAAAAAAAym2ubWWEhzoSgAMchAreh81OXXdR0msWAAAAAAAAAAAAAAAZXPk/noMUAAAAABhmKOF1NR0zWjcAAAAAAAAAAAAASot/myhy0AAAAAAAAwzHM4WFf2yFgAAAAAAAAAAAG/oqq15aDNAAAAAAAAAh0XS830z4NwAAAAAAAAAAAel9Kxy4bAAAAAAAAAAc50dDuRB0yAAAAAAAAAAAkR50XY47AAAAAAAAAAVNtXWU47ZAAAAAAAAAAAWlXb5tkOWgAAAAAAAAAEOZos50dsgAAAAAAAAAALyj6LF3jnoAAAAAAAAABjl4cx5s198AAAAAAAAAAAOn5vpuegxQAAAAAAAAAAKGJa1XbIWAAAAAAAAAASegpbrloM0AAAAAAAAAACPz3U870zoG4AAAAAAAAABZ21ZZ8tBmgAAAAAAAAAAKq10Wc6987ZAAAAAAAAAAu52rbw0CgAAAAAAAAAADWVtZ09D0zGG4AAAAAAAAkxrnNsGOXLQAAAAAAAAAAADTu0JUW0CB0meizi6RxYAAAAAABuuo8LFtpHnvPQAAAAAAAAAAA0G7nJdf0zt1+NxliAAAAAAAEqKXO4qLfCchzOdBQAAAAAAAAAGOQ5rXd0nbIWAAAAAAAAAASLWiZvUe83PxbVH35voAAAAAAADXAssqDDT0m/QaAgAAAAAAAAAAACRH2L0o4aAAAAAY5YkCFGx65yxNQAAAAAAAAAAAAAABv1XEs8cdAAAAAAUEXqIPTNKyx3AAAAAAAAAAAAAAGWNpLLlHHQAAAAAAAFVV9PznTOsbgAAAAAAAAAAAA3K6DXv5UM0AAAAAAABX2Hhy63i9swmeFgAAAAAAAAAnywp1ptxY8gxQAAAAAAAAAAAPIsslJC6jTtzidB6QEAAANsyWuW++KKZc55saSYoAAAAAAAAAAAAAAACFNJQaukbcv50lLqRRqJcbo833M5aAAAAAAAAAAAAAPPQAAAAAABHkDl/JkPvmwuaqZyslGZslGElGElGElGElGElGElGyN7QN7TuBgZtewAAAPB60YklGElGElGElGElGElGGujv6Hpn//EACgQAAIBBAIBBAICAwAAAAAAAAECAwAEEUASE1AhMDEzEBQiMiAjcP/aAAgBAQABBQL/AJYsbtQtnNC1r9Va/VFG1NNA4ogjxABJjtiaSJF9ggGntlNSRMnhYrctSoFHuS24anQofAKCxhgCaDKGE0BTwFrHxXSuosb1unN9NhlWHFty3TimpeLhtuFeUmrdDMW3ZrrP6qdu2GItaUYk2R8r6DWuvu2YBmXXvfnZsx/t17wfx2bIbF0MxbNkP468wzHs2v1a7f1PzsQ+kew4w+wvxsXK4l10/vs3o2Lf7tmZeUevafbtTDjJrWQ9dq9GvZfG1MnNNa0GItu7j1oxxTaduI9GE0fW2nbryk25V5RwzGM/xmSWMxnStEwgOdtpFVrmKlYqROriSPjoxJzeRxEkAwmyTgStzdXZaPr+AcaKYgjGZpdmQ8auJuWqhEdMSxtY+K7LDIdeDasZ4v8AspiKcSNs3MfIa8MnWUnVtc00jq7Su20sjLSXVLKjaTMFp7oU0rNvxOwf3ScBroU07miSfAx/Z7p+D6HwUP2+9PGVfwKgsYYOB9+S3BojB3gMmGIRjRu49+0j02HISLwbcjQuyjiNO6jyNtI2aooxGuq9sKa2cUQRrAE0lsTSQqu1jNNAhqS3ZaIxpRW5akQJvvGriS3K+981Hbs1JCqeDlgDV0SU0bLWMf5KjNQtTX6opYEFBQPEMitU8XWfzBF2FQFHjJk5p+FGWReK+Oul4yVZrl/H3S5jq2finZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXZXOuf5zXL2mfFdldldldldldldldldldldldldlGTNH5//8QAGxEAAgMBAQEAAAAAAAAAAAAAAREwQFBgACD/2gAIAQMBAT8B4FcGIzZNk4wsiyJTIMc6JjFt7atHGU6+15U1q//EACERAAICAgICAwEAAAAAAAAAAAECETAAQBIxICEQQVFQ/9oACAECAQE/Af4kjOQzkMnULYST4hiMBnRZqVa9jFY93N3Wmylp6sXu1urB3a+y9q9WP3aljd2gwbDcp+qmMC+OXvAf2k+7lFbT9XAzYVnChqAnAsa4UaJMUB/3QJipDexmoGM5CsmML3h8mfGc5jC+lMZzwNPwxjZbvYTP/8QAKRAAAQQBAwMDBAMAAAAAAAAAAQAhMUARAiJQEjBhEEFxAyBRgTJwsf/aAAgBAQAGPwL+rG0r2CfUpKlNqUJxxDLemHYcLaycNwudTBbR3drFbuBwFkvqoYKzpccBn3NPq03vFTCI5LNwCsfFw6qxuCvq5I2tNjTa+LANrUeSNjVyRtabJFkWT5sD5tDVYFojkyK+o2wa+q2RyfWP3WAt5K8FeKguELBheE9PP5uAFden9raV0/VCzpfTRwv8TybZKY+rUd38ihm11eyxpirmdSyVkybWFisD6YANrP45E7inNpitwTGk5W0JzfD99hlfhPwOn5754PT898s3BYCyZoMywb+AvNLrF/qNPCxdwsVOoe1xhX2lM6cVmC3KLcJnT0tzJr7pnHeZOw4RpUJwn+5gnKkqEw4hwvH2PCwONx6gIDj/AJ9CeShQoUKFChQoUKFChQoUKFChQo70KFChQoUKFChQoUKFCK//xAAoEAACAQMEAgMAAwADAAAAAAABEQAhMUBBUWHwUHEQMIEgofFwseH/2gAIAQEAAT8h/wCLLhfsvhh/4kGtLmzRk3YOIdqD34hKEk8SqEhsJYV8/QNQj7lZqyrM3DwqqIrI+xO8ZmFEBeBCQsz/AAEwFJYn+APgKhsYYNtqM5I7KwBDDGYtY8dM1Xua4qERQ5nBVYAhivXtmXDGFJOkBEg3y/bq46BzlAwHMBI4xwSNspW/cgK2pymkdmQPegrKqalshzxXKIC6E5CFxlCh5yAYDtARDnJFI7ZBqJx0cgBkAXlHqySGe2SQ+TjUdqmQL8k1Vl6y/ezxwbjLq/njhW5WXvZcQhEg3GN+gcxJ0TjOFhlg0yeyCH5NjiJ2grmKu5Eua27SsDZf1FGzQ4bI7wBloVlnLRMrXQbBHBBlojcS4NsjBMPTcz/qKFCdwcoRCbCFI/kv2toTNJ7fBbiwAGUKmVb0IfeAQBBZNDoXif7jij/yjaNazljQTlYw5DxgnwwJcViAXOUFUohkFOQG5RiUeYCDYvGs2gBBgDrAyo8ZRlyoKtxLYuAg2LwQ1IQSjuY7sGPOEIJE/cIxNhATWh6GnEOs2fHwLIQUjv4MWH7xJuF+CSFmAAZ/eIBCIcdmtDGoEZ5hgZOHHS1Nc+8L1hjKVjClPNEQtrAhCwxN7swXsDcxQF9TikAhG0KqoneaECU8gxjKZBbJcRGmO5gCtkkLgDNlepUKUISBHBAZQgBkm0DIc9QH9js/dADYJ9Qg5FRAZ3Pg3Zo+Fuz+QlYXv+R29DdP1Brmhd1HmW8HiNZpWRf/AAO2z/cSBDxrnVpCCCjf4TFyYIZpmnCqgt8GKKAeQZnUfMu7ndzu53c7ud3O7ndzu53c7ud3O7ndzu53c6OdHOznZ/Jg8PoJgtP9Sd3O7ndzu53c7ud3O7ndzu53c7ud3ECDT7lPun//2gAMAwEAAgADAAAAEP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD723+w/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD+7f3PPLPNP/8A/wD/AP8A/wD/AP8A/wD/AP8A/wD08888888sJ/8A/wD/AP8A/wD/AP8A/wD/AP8A8nPPPPPPPPLHv/8A/wD/AP8A/wD/AP8A/wD/AJvPPPPPPPPPO/8A/wD/AP8A/wD/AP8A/wD/AL1vPPPPPPPPPLP/AP8A/wD/AP8A/wD/AP8A/wD/ADzzzzzzzzzyv/8A/wD/AP8A/wD/AP8A/wD7vPPPPPPPPPPLV/8A/wD/AP8A/wD/AP8A/wD/APPNNOPPPPPPLH//AP8A/wD/AP8A/wD/AP8Aq8w8888888808c//AP8A/wD/AP8A/wD/AP5vPPPPPPPPPPPOf/8A/wD/AP8A/wD/AP8A/wA888888888888r3/8A/wD/AP8A/wD/AP8A/wDzzzzzzzzzzzzxP/8A/wD/AP8A/wD/AOJzzzzzzzzzzzzy+vj/AP8A/wD/AP8A/wDF7zzzzzzzzzzy590//wD/AP8A/wD/ADCt/PPPPPPPPPPLEP8A/wD/AP8A/wD/AP8A/wDO++88888888998/8A/wD/AP8A/wD/AP8A/wD88zzzzzzzxZ//AP8A/wD/AP8A/wD/AP8A/wD/AP8A7PPPPPPPPd//AP8A/wD/AP8A/wD/AP8A/wD/AO77zzzzzzzzf/8A/wD/AP8A/wD/AP8A/wD/APRXzzzzzzzzyrDff/8A/wD/AP8A/wD/AIQ7zzzzzzzzzzzw8pT/AP8A/wDakB7zzzzzzRzzzzzzzzw9x3/jzzzzzzzzjzxRxzzzzzzzzz5xXzzzzzzyjSDzBRRTTTzzzzzz/wD/xAAfEQEAAgMAAgMBAAAAAAAAAAABETAAMUAQICFBUFH/2gAIAQMBAT8Q/EBchyHlBwI9XCRwhSkXhNbdp0ivS37s0tN2P6Y7s06Wlrqw1cPuoJbnJj4xp0XKa4bcGbUiwYwlVOLPOrwhNDwD5qF4RUk4jYXEnH+PaMlhxEnwSPAT0muhz//EAB8RAQACAwEBAAMBAAAAAAAAAAEAESEwMUBBECBhUP/aAAgBAgEBPxD/ABEOs/tP7QDzyCc/dEHwrGjTbh30Nape53TW8VuW3Ws1tdJ2cPTKhtWPT87VY9IvmzttzGxWruvy9AF3iIwdic0st/CLbsC5XllGlLmKhETu2psCAciJ3SnE+yAHNyY0A8JjOgueBQuKrbpsK3KHZaxqRWQT7rAWxHkVe7RTkT7ACz9UnWMEeRV74RKyXh4fitR5xpuDZcV+gsVP/8QAKxABAAIABQMDBAMAAwAAAAAAAQARITFAQVFh8PEQMHEgUIGRobHBYNHh/9oACAEBAAE/EP8AnVfRT9sqGYGK5BnM1PXBDPnBxle/8KmKt8VHHo3aXstwjcxMJZq/yJCr3CEC8sfjH7OQasgWyi/NpT5goMG+JgfriV9NYynB4Fy/RfjE/Ut6FljFdfsnQFdgxnVChukPAPJmyvbQKFjsw7FWOGS9Zf6tnZ/MfsDp12P7YeU8m3wge+tG3MfQeiWxSZ56/B/hbhokloVJ+J5jWtvw3y88QADI0YLWBIwilVXTWY5G8xdztIxxwGl5Y6ozmXm5e5CACg20oMYKBHVGcvSCFBzempaxVEQxgUdVdCwAmOK3zpksnSxuqc4tQVzjBHAAFGmYSBVhfnUmcHIKWDTkCAst3dUDWdp/UDTs40Rz1Jr+P4ai03VyDUqU2DqPmawy1NzbLLjqCxoKE/EALIVfvUvmir9Le3oXfq3t7xEHCyoVhduOoTGCaCGklIROMNSqMsBNQFMxaf3Mh6hcsHaA1i4+45fSXbeW30KmGrL41BWyzFx5qGjxvp9WamVgbxEUTEwdORCXTrpqkucPNFcZ1p2My0Hxq1C4CK+Y56aujniasdlYnWIbpKR5301a8jq6mD2wDnmVpAtDNUCHwberXZVBeI8P8YkfgK18XR0lnG4+LgateCD5lEU2lZ4syKQBPyv8i8rfwp/3ospWOnw+I/bdi+dXQjqi5THF1Ax5IGZ08n5JSzbD/bpFwdnlHzOugERms4JfsLCuRmIay/K6my6vExqInQKzIYVB0gtBeaxH8Sxo3DJOkbVbYJs/iKqrm++gBY0BDfhK0ZvQltLLtNrIQAoCtTim6KJxzCy7Ny8aTH9yywY5jreseIf818ECq/wONUT9hTAtpFrqaXu44ZNof5DLC8byj4C7VWqVkebrMg2XprgDawehFjIRwuG2Q5MZelQK2jhcbvELWS0i2CYLNT8QusrMcRlGM3zyVE6wS6cIbZDkb0Fx8nmOLLBD2UqimNRhUsqra5rq9oT4w+MIC+US8IZe7klltSrmVnljDwCNjmIjS2av2H+C/uGR7vW4SPmIQ/uX9iBwsQsMvesqaBMq+xH7DlKwTtsPT360Bwxe2tqGTDosUjr75AoIIc0YrtoWBQG2AMfzriAi1/rDRAfYUkC1EcHk51po5sRsQi6CtGzDzCxOSP8AGop9C1oz6Q3buhgQ3jrFM19i/ddBaKRl+hlpiA6Rm6Xcaf1FLf1K9K0dMtSfBjMMfw3IEgCACgBwezWg/nsLhaFqrcXmA/uJ2lmJUqV76ACrsYwfvs3MOhK33la2o6DbszmVPxvci7ODx7dTKX2D50uBNgbvMmDE9SV77okEpyYKLewyWPUBk3nGwx+VLjQK3IFfUaEDvtHBA8YmBR5QohzBt0yxx3OiAGX69/f030lRBzLgFFhq9yKWK2Dx0+igVNi/4hukSpWgv0PQz9L0p4VUtPMdnQwTr6JhKlCDoHz77L9TKMIw9N/Tf0TtDLQJcwao7Pnf0AAwRfN6BmPowjD0y9N/QbfodBUAW3e9egKF7bW6/wAnd4Tu8J3eE7vCd3hO7wnd4Tu8J3eE7vCd3hO7wnd4Tu8J3eE7vCdvhO3wnb4Q7P8AxDEhlELwMJgHLrDKHoZ+lY+iC5YRLadW7dJ3eE7vCd3hO7wnd4Tu8J3eE7vCd3hO7wnd4Tu8J3eEC3EI/h8QADIRP//Z";
moment.locale('ro')

window.onload = () => {

    initializeTableData();

    document.getElementById("add-employee-button").addEventListener("click", addNewEmployee, false);
    document.getElementById("open-add-employee-modal").addEventListener("click", openModal, false);
    document.querySelectorAll(".close-employee-modal").forEach(e =>{
        e.addEventListener("click", closeModal, false);
    });

    document.getElementById("table-sort-by").addEventListener("change", maintainEmployeeOrder, false);
    document.getElementById("table-sort-order").addEventListener("change", maintainEmployeeOrder, false);

    document.getElementById("profile-picture").addEventListener("change", previewProfilePicture, false);
    setDelete();
}

function initializeTableData() {

    employees = JSON.parse(localStorage.getItem(TABLE_DATA));
    if (employees == undefined) {
        employeeNextId = 0
        employees = [
            new Employee(employeeNextId++,'Pop', 'Tudor', 'tudor.pop@principal.com', 'Barbat', '1998-10-01', ''),
            new Employee(employeeNextId++,'Mccann', 'Kathryn', 'email@email.com', 'Femeie', '2000-12-10', ''),
            new Employee(employeeNextId++,'Walter', 'Giselle', 'email@email.com', 'Femeie', '2002-12-10', ''),
            new Employee(employeeNextId++,'Ashley', 'Hugo', 'email@email.com', 'Barbat', '1989-12-10', ''),
            new Employee(employeeNextId++,'Schmitt', 'Jay', 'email@email.com', 'Barbat', '1997-12-10', ''),
        ]

        localStorage.setItem(TABLE_DATA, JSON.stringify(employees));
        localStorage.setItem(TABLE_ROW_NEXT_ID, JSON.stringify(employeeNextId));
    }

    maintainEmployeeOrder();
}

function populateTable(employees) {
    tableBody = document.getElementById("employees-table-body")
    tableBody.innerHTML = '';

    employees.forEach(e => {

        hasProfilePic = true;
        imageToBeDisplayed = e.profilePic;

        if(imageToBeDisplayed == '' || imageToBeDisplayed == undefined) {
            hasProfilePic = false
            if(e.sex == 'Barbat'){
                imageToBeDisplayed = MALE_PICTURE_PLACEHOLDER;
            }else{
                imageToBeDisplayed = FEMALE_PICTURE_PLACEHOLDER;
            }
        }

        tableBody.innerHTML += `<tr employee-id=${e.employeeId} profile-pic-set=${hasProfilePic}>
            <td>
                <div class="profile-picture-wrapper">
                    <img class="profile-picture" id=pic-of-${e.employeeId} src=${imageToBeDisplayed}>
                </div>
            </td>
            <td>${e.lastname}</td>
            <td>${e.firstname}</td>
            <td>${e.email}</td>
            <td>${e.sex}</td>
            <td>${e.birthdate}</td>
            <td><span class="delete-row fa fa-remove"></span></td>
        </tr>`
    });
}

function addNewEmployee(){
    modal = document.getElementById("add-employee-modal");

    employeeLastName = document.getElementById("lastname-input").value;
    employeeFristname = document.getElementById("firstname-input").value;
    employeeEmail = document.getElementById("email-input").value;
    employeeSex = document.getElementById("gender-dropdown").value;
    employeeBirthdate = document.getElementById("birthdate-input").value;
    employeeProfilePic = document.getElementById("profile-picture").files[0];

    var reader = new FileReader();

    // Populate table once the image is ready
    reader.addEventListener ("load", () => {
        readProfilePic = reader.result;
        completeAddTableRowAction(employeeLastName, employeeFristname, employeeEmail, employeeSex, employeeBirthdate, readProfilePic);
    });

    if(employeeProfilePic != undefined){
        reader.readAsDataURL(employeeProfilePic);
    }else{
        completeAddTableRowAction(employeeLastName, employeeFristname, employeeEmail, employeeSex, employeeBirthdate);
    }
    
}

// creates new employee object
function Employee(employeeId, lastname, firstname, email, sex, birthdate, profilePic) {
    this.employeeId = employeeId;
    this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
    this.birthdate = moment(birthdate).format('Do MMMM YYYY');
    this.sex = sex;
    this.profilePic= profilePic;
}

// function needed to be called from image loaded callback and addNewEmployee function body
function completeAddTableRowAction(employeeLastName, employeeFristname, employeeEmail, employeeSex, employeeBirthdate, employeeProfilePic = '') {
    formIsValid = validateEmployeeFields(employeeLastName, employeeFristname, employeeEmail, employeeSex, employeeBirthdate);

    if(formIsValid) {
        employeeId = JSON.parse(localStorage.getItem(TABLE_ROW_NEXT_ID));
        allEmployees = JSON.parse(localStorage.getItem(TABLE_DATA));

        newEmployee = new Employee(employeeId++, employeeLastName, employeeFristname, employeeEmail, employeeSex, employeeBirthdate, employeeProfilePic);
        allEmployees.push(newEmployee);
        // to do call method to sort items

        localStorage.setItem(TABLE_ROW_NEXT_ID, JSON.stringify(employeeId));
        localStorage.setItem(TABLE_DATA, JSON.stringify(allEmployees));

        maintainEmployeeOrder()
        closeModal();
    }
}

function previewProfilePicture(){
    employeeProfilePicPreview = document.getElementById("profile-picture").files[0];
    previewWrapper = document.querySelector('.preview-image-wrapper');
    var reader = new FileReader();

    // Populate table once the image is ready
    reader.addEventListener ("load", () => {
        chosenImage = reader.result;
        previewWrapper.style = 'display:block';
        document.getElementById("profile-picture-preview").setAttribute('src', chosenImage);
    });

    reader.readAsDataURL(employeeProfilePicPreview)
}

function compareNamesAsc(a, b) {
    if ((a.lastname + a.firstname) < (b.lastname + b.firstname)){
        return -1;
      }
      if ((a.lastname + a.firstname) > (b.lastname + b.firstname)){
        return 1;
      }
      return 0;
}

// the smaller the year, the older the person
function compareBirthdateAsc(a, b) {
    ageA = parseInt(moment(a.birthdate).fromNow().split(' ')[0]); // "13 years ago" --> 13 as an int 
    ageB = parseInt(moment(b.birthdate).fromNow().split(' ')[0]);
    
    if (ageA < ageB){
        return -1;
      }
      if (ageA > ageB){
        return 1;
      }
      return 0;
}

function compareNamesDesc(a, b) {
    if ((a.lastname + a.firstname) < (b.lastname + b.firstname)){
        return 1;
      }
      if ((a.lastname + a.firstname) > (b.lastname + b.firstname)){
        return -1;
      }
      return 0;
}

function compareBirthdateDesc(a, b) {
    ageA = parseInt(moment(a.birthdate).fromNow().split(' ')[0]); // "13 years ago" --> 13 as an int 
    ageB = parseInt(moment(b.birthdate).fromNow().split(' ')[0]);
    
    if (ageA < ageB){
        return 1;
      }
      if (ageA > ageB){
        return -1;
      }
      return 0;
}

function setDelete() {
    document.querySelectorAll(".delete-row").forEach(e => {
        e.addEventListener("click", deleteEmployeeRow, false);
    });
}

function deleteEmployeeRow(htmlDeleteElement) {
    rowToBeDeleted = htmlDeleteElement.target.closest("tr");

    employeeToDeleteId = rowToBeDeleted.getAttribute("employee-id");
    rowToBeDeleted.remove();

    allEmployees = JSON.parse(localStorage.getItem(TABLE_DATA));
    allEmployees = allEmployees.filter(e => e.employeeId != employeeToDeleteId);

    localStorage.setItem(TABLE_DATA, JSON.stringify(allEmployees));
}

//Sorts and re-prints whole table
function maintainEmployeeOrder() {
    allEmployees = JSON.parse(localStorage.getItem(TABLE_DATA));

    fieldToSortBy = document.getElementById("table-sort-by").value;
    sortOrder = document.getElementById("table-sort-order").value;

    if(fieldToSortBy == 'name'){
        if(sortOrder == 'ascendent'){
            allEmployees.sort(compareNamesAsc);
        }else{
            allEmployees.sort(compareNamesDesc);
        }
    }else if(fieldToSortBy == 'birthdate'){
        if(sortOrder == 'ascendent'){
            allEmployees.sort(compareBirthdateAsc);
        }else{
            allEmployees.sort(compareBirthdateDesc);
        }
    }
    
    populateTable(allEmployees);
    setDelete();
}

//modal controls https://dev.to/ara225/how-to-use-bootstrap-modals-without-jquery-3475

function openModal() {
    document.getElementById('add-employee-modal').style = "display:block";
    document.getElementById('add-employee-modal').classList.add("show");
}
function closeModal() {
    document.getElementById('add-employee-modal').style = "display:none";
    document.getElementById('add-employee-modal').classList.remove("show");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById('add-employee-modal')) {
    closeModal();
  }
}


//Validators
function validateEmployeeFields(employeeLastName, employeeFristname, employeeEmail, employeeSex, employeeBirthdate) {
    if(employeeLastName == "") {
        alert("Numele este un camp obligatoriu !")
        return false;
    }
    if(employeeFristname == "") {
        alert("Prenumele este un camp obligatoriu !")
        return false;
    }
    if(employeeEmail == "") {
        // alert("Email-ul nu este valid !")
        alert("Email-ul este un camp obligatoriu !")
        return false;
    }else{
        // regex validation for email:  https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(! re.test(employeeEmail)) {
            alert("Email-ul introdus nu este valid !")
            return false;
        }
    }
    if(employeeSex == "") {
        alert("Trebuie sa selectati sex-ul angajatului !")
        return false;
    }
    if(employeeBirthdate == "") {
        alert("Data nasterii este un camp obligatoriu !")
        return false;
    }else if(! validateAgeAtLeast16(employeeBirthdate)){
        alert("Angajatul trebuie sa aiba cel putin 16 ani !");
        return false;
    }

    return true;
}

// https://www.codegrepper.com/code-examples/javascript/javascript+funtion+to+calculate+age+above+18
function validateAgeAtLeast16(dateStr) {
    birthdate = new Date(dateStr);
    dateDifference = new Date(Date.now() - birthdate.getTime());
    personAge = dateDifference.getUTCFullYear() - 1970;
    
    return personAge >= 16;
}
