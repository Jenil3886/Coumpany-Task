let inputName = document.getElementById("input-name");
let inputEmail = document.getElementById("input-email");
let inputPassword = document.getElementById("input-password");
let inputNumber = document.getElementById("input-number");

let male = document.getElementById("Male")
let female = document.getElementById("Female")
let other = document.getElementById("Other")

let traveling = document.getElementById("Travelling")
let lisningMusic = document.getElementById("Listening-music")
let watchingMovie = document.getElementById("Watching-movie")
let playingCricet = document.getElementById("Playing-cricket")

let city = document.getElementById("city")
let value = []

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
    playingCricet.checked && values.interest.push(playingCricet.value);

    value.push(values);
    // console.log(value)
        
    const tableBody = document.getElementById('table-body');

    tableBody.innerHTML = '';

    for (i = 0; i < value.length; i++) {
        const tr = document.createElement('tr');
        const content = `
            <td>${value[i].id}</td>
            <td>${value[i].name}</td>
            <td>${value[i].email}</td> 
            <td>${value[i].password}</td>
            <td>${value[i].number}</td>
            <td>${value[i].gender}</td>
            <td>${value[i].interest}</td>
            <td>${value[i].city}</td>
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

function renderData() {  
    const tableBody = document.getElementById('table-body');

    tableBody.innerHTML = '';

    for (i = 0; i < value.length; i++) {
        const tr = document.createElement('tr');
        const content = `
            <td>${value[i].id}</td>
            <td>${value[i].name}</td>
            <td>${value[i].email}</td>
            <td>${value[i].password}</td>
            <td>${value[i].number}</td>
            <td>${value[i].gender}</td>
            <td>${value[i].interest}</td>
            <td>${value[i].city}</td>
            <td><button class="edit-btn" onClick ='editBtn(${value[i].id})'>Edit</button>
            <td><button class="delete-btn" onClick='deleteBtn(${value[i].id})'>Delete</button>
            `
        tr.innerHTML = content;
        tableBody.appendChild(tr)
    }
}

function updateBtn() {
    const id = document.querySelector('.update-btn')?.id

    if (id) {
        const values = {
            id: parseInt(id),
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
        playingCricet.checked && values.interest.push(playingCricet.value);

        console.log('updated data', values)

        const index = value.findIndex((obj) => parseInt(id) === obj.id)
        value.splice(index, 1, values)
    }

    const container = document.getElementById('input-container')
    const child = document.querySelector('.update-btn')

    container.removeChild(child)

    renderData()
}

function editBtn(editId) {
    const container = document.getElementById('input-container')
    const existingBtn = document.querySelector('.update-btn')

    if (existingBtn) {
        existingBtn.setAttribute('id', editId)
    } else {
        const Update = document.createElement('button')
        Update.innerHTML = "Update"
        Update.setAttribute('class', 'update-btn')
        Update.setAttribute('id', editId)
        Update.addEventListener('click', updateBtn)

        container.appendChild(Update)
    }

    const editRecord = value.find((obj) => editId === obj.id) || {}

    console.log('edit record id', editId)
    console.log('initial data', editRecord)

    document.getElementById("input-name").value = editRecord.name;
    document.getElementById("input-email").value = editRecord.email;
    document.getElementById("input-password").value = editRecord.password;
    document.getElementById("input-number").value = editRecord.number;

    document.getElementById("Male").checked = editRecord.gender?.toLowerCase() === 'male'
    document.getElementById("Female").checked = editRecord.gender?.toLowerCase() === 'female'
    document.getElementById("Other").checked = editRecord.gender?.toLowerCase() === 'other'

    document.getElementById("Travelling").checked = editRecord.interest?.includes('Travelling')
    document.getElementById("Listening-music").checked = editRecord.interest?.includes('Listening Music')
    document.getElementById("Watching-movie").checked = editRecord.interest?.includes('Watching Movie')
    document.getElementById("Playing-cricket").checked = editRecord.interest?.includes('Playing Cricket')

    document.getElementById("city").value = editRecord.city
}

function deleteBtn(id) {
    value = value.filter((obj) => parseInt(id) !== obj.id)
    renderData()

}
