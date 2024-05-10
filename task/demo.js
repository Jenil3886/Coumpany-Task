document.addEventListener("DOMContentLoaded", function () {

    let items = [];

    // functin to renderItems
    function renderItems() {
        tableBody.innerHTML = "";

        items.forEach((item, index) => {
            const tr = document.createElement("tr");
            const textContent = `
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.number}</td>
            <td>${item.gender}</td>
            <td>${item.hobbies.join(", ")}</td>
            <td>${item.city}</td>

            
            `;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-btn";
            deleteButton.addEventListener("click", () => {
                deleteItem(index);
            });
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.className = "edit-btn";
            editButton.addEventListener("click", () => {
                editItem(index);
            });

            tr.appendChild(deleteButton);
            tr.appendChild(editButton);
            tableBody.appendChild(tr);

            tr.innerHTML = textContent

        });
    }

    // Function to add item
    function addItem(item) {
        items.push(item);
        renderItems();
        saveToConsole();
    }

    // Function to delete item
    function deleteItem(index) {
        items.splice(index, 1);
        renderItems();
        saveToConsole();
    }

    // Function to edit item
    function editItem(index) {
        const item = items[index];

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const numberInput = document.getElementById("number");
        const genderInputs = document.querySelectorAll('input[name="gender"]');
        const hobbiesInputs = document.querySelectorAll('input[name="hobby"]');
        const citySelect = document.getElementById("city");


        nameInput.value = item.name;
        emailInput.value = item.email;
        passwordInput.value = item.password;
        numberInput.value = item.number;
        genderInputs.forEach(input => {
            if (input.value === item.gender) {
                input.checked = true;
            } else {
                input.checked = false;
            }
        });
        hobbiesInputs.forEach(input => {
            if (item.hobbies.includes(input.value)) {
                input.checked = true;
            } else {
                input.checked = false;
            }
        });
        citySelect.value = item.city;

        // Remove the edited item from the list
        items.splice(index, 1);
        renderItems();
        saveToConsole();
    }

    // Event listener for form submission
    itemForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const numberInput = document.getElementById("number");
        const genderInputs = document.querySelectorAll('input[name="gender"]');
        const hobbiesInputs = document.querySelectorAll('input[name="hobby"]:checked');
        const citySelect = document.getElementById("city");

        const gender = Array.from(genderInputs).find(input => input.checked)?.value || "Not Specified";
        const hobbies = Array.from(hobbiesInputs).map(input => input.value);

        const item = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim(),
            number: numberInput.value.trim(),
            gender: gender,
            hobbies: hobbies,
            city: citySelect.value
        };

        if (item.name !== "" && item.email !== "" && item.password !== "" && item.number !== "") {
            addItem(item);
            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
            numberInput.value = "";
            genderInputs.forEach(input => input.checked = false);
            hobbiesInputs.forEach(input => input.checked = false);
            citySelect.value = "New York";
        } else {
            alert("Please fill in all fields!");
        }
    });

    // Function to save data to console
    function saveToConsole() {
        console.log("Items:", items);
    }

    // Initial rendering
    renderItems();
}), false;
