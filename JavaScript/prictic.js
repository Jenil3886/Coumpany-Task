let inputName = document.getElementById("input-name")
let inputEmail = document.getElementById("input-email")
let inputPassword = document.getElementById("input-password")
let inputNumber = document.getElementById("input-number")

let male = document.getElementById("Male")
let female = document.getElementById("Female")
let other = document.getElementById("Other")

let traveling = document.getElementById("Traveling")
let lisningMusic = document.getElementById("Listening-music")
let watchingMovie = document.getElementById("Watching-movie")
let playingCricket = document.getElementById("Playing-cricket")

let city = document.getElementById("city")

function submit() {
    const values = {
        id: Math.floor(Math.random() * 1000000),
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value,
        number: inputNumber.value,
        gender: male.checked ? male.value : female.checked ? female.value : other.checked ? other.value : null,
        interest: [],
        city: city.value,
    }

    traveling.checked && values.interest.push(traveling.value);
    lisningMusic.checked && values.interest.push(lisningMusic.value);
    watchingMovie.checked && values.interest.push(watchingMovie.value);
    playingCricket.checked && values.interest.push(playingCricket.value);

    value.push(values)

    const tableBody = document.getElementById("table-body")
    tableBody.innerHTML = " ";

    for (i = 0; i < value.length; i++) {
        const tr = document.createElement("tr");

        const content = `
        <td>${value[i].id}</td>
        <td>${value[i].name}</td>
        <td>${value[i].email}</td>
        <td>${value[i].password}</td>
        <td>${value[i].number}</td>
        <td>${value[i].gender}</td>
        <td>${value[i].interest}</td>
        <td>${value[i].city}</td>
        <td><button clss="edit-btn" onclick='editBtn(${value[i].id})'>Edit</button></td>
        <td><button clss="delete-btn" onclick='deleteBtn(${value[i].id})'>Delete</button></td>   
        `

        tr.innerHTML = content;
        tableBody.appendChild(tr)
    }

}