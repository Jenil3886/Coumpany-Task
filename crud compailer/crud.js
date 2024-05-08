let inputName = document.getElementById("input-name")
let inputEmail = document.getElementById("input-email")
let inputPassword = document.getElementById("input-password")
let inputNumber = document.getElementById("input-number")

let Male = document.getElementById("Male")
let Female = document.getElementById("Female")
let Other = document.getElementById("Other")

let Traveling = document.getElementById("Traveling")
let LisningMusic = document.getElementById("Lisning-music")
let watchingMovie = document.getElementById("watching-movie")
let PlayingCricet = document.getElementById("Playing-cricet")

let dropdown = document.getElementById("city");
let value = []

// const dropdown = document.getElementById("city");
const selectedValue = dropdown.value;
console.log(selectedValue);

const save = () => {
    const values = {
        id: Math.floor(Math.random() * 1000000),
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value,
        Number: inputNumber.value,
        gender: Male.checked ? Male.value : Female.checked ? Female.value : Other.checked ? Other.value : null,
        interests: [],
        city:[]
    }
    Traveling.checked && values.interests.push(Traveling.value)
    LisningMusic.checked && values.interests.push(LisningMusic.value)
    watchingMovie.checked && values.interests.push(watchingMovie.value)
    PlayingCricet.checked && values.interests.push(PlayingCricet.value)

    

    // localStorage.setItem('values', JSON.stringify(values))

    value.push(values)


    console.log(value)

    const tableBody = document.getElementById('table-body');

    const tableData = document.getElementsByClassName('table-data');

    // for (let i = 0; i < tableData.length; i++) {
    //     document.getElementById('id').innerText = value[i].id
    //     document.getElementById('name').innerText = value[i].name
    //     document.getElementById('email').innerText = value[i].email
    //     document.getElementById('password').innerText = value[i].password
    //     document.getElementById('number').innerText = value[i].Number
    //     document.getElementById('gender').innerText = value[i].gender
    //     document.getElementById('hobby').innerText = value[i].interests
    // }

    for (let i = 0; i < value.length; i++) {
        const tr = document.createElement('tr');
        const content = `
                        <td>${value[i].id}</td>
                        <td>${value[i].name}</td>
                        <td>${value[i].email}</td>
                        <td>${value[i].password}</td>
                        <td>${value[i].Number}</td>
                        <td>${value[i].gender}</td>
                        <td>${value[i].interests}</td>
                        <td><button onclick="edit()" id="edit">Edit</button></td>
                        <td><button onclick=${deleteRecord(i)} id="delete">Delete</button></td>
                        `;

        tr.innerHTML = content;
        tableBody.appendChild(tr)
    }
}

function deleteRecord(i) {
    console.log(i)
}
