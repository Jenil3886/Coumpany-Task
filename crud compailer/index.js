const data = getData()

for (let record of data) {
  const tableBody = document.querySelector('#tbody')

  const row = document.createElement('tr')
  const nameElement = document.createElement('td')
  const emailElement = document.createElement('td')
  const passwordElement = document.createElement('td')
  const numberElement = document.createElement('td')
  const genderElement = document.createElement('td')
  const hobbyElement = document.createElement('td')
  const cityElement = document.createElement('td')
  const editElement = document.createElement('td')
  const deleteElement = document.createElement('td')

  const editButton = document.createElement('button')
  const deleteButton = document.createElement('button')

  editButton.innerHTML = 'Edit'
  deleteButton.innerHTML = 'Delete'

  editElement.appendChild(editButton)
  deleteElement.appendChild(deleteButton)

  editButton.setAttribute('id', record.id)
  deleteButton.setAttribute('id', record.id)

  editButton.onclick = () => editRecord(record.id)
  deleteButton.onclick = () => deleteRecord(record.id)

  nameElement.innerHTML = record.name
  emailElement.innerHTML = record.email
  passwordElement.innerHTML = record.password
  numberElement.innerhtml = record.number
  genderElement.innerhtml = record.gender
  hobbyElement.innerhtml = record.hobby
  cityElement.innerHTML = record.city

  row.appendChild(nameElement)
  row.appendChild(emailElement)
  row.appendChild(passwordElement)
  row.appendChild(numberElement)
  row.appendChild(genderElement)
  row.appendChild(hobbyElement)
  row.appendChild(cityElement)
  row.appendChild(editElement)
  row.appendChild(deleteElement)

  tableBody.appendChild(row)
}

function getData() {
  return localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : []
}

function addRecord() {
  const data = getData()

  const id = data.length
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const number = document.getElementById('number').value
  const gender = document.getElementById('grnder').value
  const hobby = document.getElementById('hobby').value
  const city = document.getElementById('city').value

  data.push({ id, name, email, password, number, gender, hobby, city })

  localStorage.setItem('data', JSON.stringify(data))

  location.reload()
}

function editRecord(id) {
  const data = getData()

  const record = data.find((record) => record.id === id)

  const nameEdit = document.getElementById('name')
  const emailEdit = document.getElementById('email')
  const passwordEdit = document.getElementById('password')
  const numberEdit = document.getElementById('number')
  const genderEdit = document.getElementById('gender')
  const hobbyEdit = document.getElementById('hobby')
  const cityEdit = document.getElementById('city')


  nameEdit.value = record.name
  emailEdit.value = record.email
  passwordEdit.value = record.password
  numberEdit.value = record.number
  genderEdit.value = record.gender
  hobbyEdit.value = record.hobby
  cityEdit.value = record.city

  const saveButton = document.querySelector('.save')

  saveButton.setAttribute('id', id)
}

function setEditedRecord() {
  const data = getData()

  const saveButton = document.querySelector('.save')
  const id = saveButton.id

  const index = data.findIndex((record) => record.id === id)

  const nameEdit = document.getElementById('name')
  const emailEdit = document.getElementById('email')
  const passwordEdit = document.getElementById('password')
  const numberEdit = document.getElementById('number')
  const genderEdit = document.getElementById('gender')
  const hobbyEdit = document.getElementById('hobby')
  const cityEdit = document.getElementById('city')

  const updatedRecord = {
    id: parseInt(id),
    name: nameEdit.value,
    email: emailEdit.value,
    password: passwordEdit.value,
    number: numberEdit.value,
    gender: genderEdit.value,
    hobby: hobbyEdit.value,
    city: cityEdit.value,
  }

  data.splice(index, 1, updatedRecord)

  localStorage.setItem('data', JSON.stringify(data))

  location.reload()
}

function deleteRecord(id) {
  const data = getData()

  const updatedData = data.filter((record) => record.id !== id)

  localStorage.setItem('data', JSON.stringify(updatedData))

  location.reload()
}