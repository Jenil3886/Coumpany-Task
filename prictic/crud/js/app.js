let inputId = document.getElementById('id')
console.log(inputId)
let inputName = document.getElementById('name')
let inputLastName = document.getElementById('l-name')
let inputEmail = document.getElementById('email')
let inputOfficeCode = document.getElementById('office-code')
let inputJobTitle = document.getElementById('job-title')

let value = []

let addBtn = document.querySelector("#add-btn");
let model = document.querySelector(".model");
let closeBtn = document.querySelector(".close-icon");

addBtn.onclick = function () {
    model.classList.add("active")
}
closeBtn.addEventListener("click", () => {
    model.classList.remove("active");
});

function register () {
    event.preventDefault()
    const values = {
        id: Math.floor(Math.random()*100000),
        name:inputName.value,
        lastName:inputLastName.value,
        email:inputEmail.value,
        officeCode:inputOfficeCode,
        jobTitle:inputJobTitle,
    }
console.log(value.id)

    value.push(values)
    console.log(value)

    const tableBody = document.getElementById('table-data');

    tableBody.innerHTML = '';

    for (i = 0; i < value.length; i++) {
        const tr = document.createElement('tr');
        const content = `
            <td>${value[i].id}</td>
            <td>${value[i].name}</td>
            <td>${value[i].lastName}</td>
            <td>${value[i].email}</td> 
            <td>${value[i].officeCode}</td>
            <td>${value[i].jobTitle}</td> 
            <td><button class="edit-btn" onClick='editBtn(${value[i].id})'>Edit</button>
            <td><button class="delete-btn" onClick='deleteBtn(${value[i].id})'>Delete</button>
            `
        tr.innerHTML = content;
        tableBody.appendChild(tr)
    }

    const container = document.getElementById('input-container')
    const child = document.querySelector('.update-btn')

    child && container.removeChild(child)
    

}