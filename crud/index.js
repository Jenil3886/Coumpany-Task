let inputName = document.getElementById("input-name");
let inputEmail = document.getElementById("input-email");
let inputPassword = document.getElementById("input-password");
let inputNumber = document.getElementById("input-number");

let male = document.getElementById("male")
let female = document.getElementById("female")
let other = document.getElementById("other")

let traveling = document.getElementById("Traveling")
let lisningMusic = document.getElementById("Lisning-music")
let watchingMovie = document.getElementById("Watching-movie")
let playingCricet = document.getElementById("Playing-cricet")

let city = document.getElementById("city")
let value = []

// 

// const selectedValue = dropdown.value;
// console.log(selectedValue);

const submit = () => {
    const values = {
        id: Math.floor(Math.random() * 1000000),
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value,
        number: inputNumber.value,
        gender: Male.checked ? Male.value : Female.checked ? Female.value : Other.checked ? other.value : null,
        intrestd: [],
        city: city.value,

    }

    Traveling.checked && values.intrestd.push(Traveling.value);
    lisningMusic.checked && values.intrestd.push(lisningMusic.value);
    watchingMovie.checked && values.intrestd.push(watchingMovie.value);
    playingCricet.checked && values.intrestd.push(playingCricet.value);

    value.push(values);
    console.log(value);

    const tableBody = document.getElementById('table-body');

    for (i = 0; i < value.length; i++) {
        const tr = document.createElement('tr');
        const content = `
            <td>${value[i].id}</td>
            <td>${value[i].name}</td>
            <td>${value[i].email}</td>
            <td>${value[i].password}</td>
            <td>${value[i].number}</td>
            <td>${value[i].gender}</td>
            <td>${value[i].intrestd}</td>
            <td>${value[i].city}</td>
            <td><button>Edit</button>
            <td><button>Delete</button>
            `
        tr.innerHTML = content;
        tableBody.appendChild(tr)


    }
}

