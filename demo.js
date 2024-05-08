// document.addEventListener("DOMContentLoaded", function() {
//     const itemForm = document.getElementById("itemForm");
//     const itemList = document.getElementById("itemList");
    
//     let items = [];

//     // Function to render items
//     function renderItems() {
//         itemList.innerHTML = "";
//         items.forEach((item, index) => {
//             const li = document.createElement("li");
//             li.textContent = item.name + " - " + item.email + " - " + item.number + " - " + item.gender + " - " + item.hobbies.join(", ") + " - " + item.city;
//             const deleteButton = document.createElement("button");
//             deleteButton.textContent = "Delete";
//             deleteButton.className = "delete-btn";
//             deleteButton.addEventListener("click", () => {
//                 deleteItem(index);
//             });
//             li.appendChild(deleteButton);
//             itemList.appendChild(li);
//         });
//     }

//     // Function to add item
//     function addItem(item) {
//         items.push(item);
//         renderItems();
//     }

//     // Function to delete item
//     function deleteItem(index) {
//         items.splice(index, 1);
//         renderItems();
//     }

//     // Event listener for form submission
//     itemForm.addEventListener("submit", function(event) {
//         event.preventDefault();
//         const nameInput = document.getElementById("name");
//         const emailInput = document.getElementById("email");
//         const passwordInput = document.getElementById("password");
//         const numberInput = document.getElementById("number");
//         const genderInputs = document.querySelectorAll('input[name="gender"]');
//         const hobbiesInputs = document.querySelectorAll('input[name="hobby"]:checked');
//         const citySelect = document.getElementById("city");

//         const gender = Array.from(genderInputs).find(input => input.checked)?.value || "Not Specified";
//         const hobbies = Array.from(hobbiesInputs).map(input => input.value);
        
//         const item = {
//             name: nameInput.value,
//             email: emailInput.value,
//             password: passwordInput.value.trim(),
//             number: numberInput.value.trim(),
//             gender: gender,
//             hobbies: hobbies,
//             city: citySelect.value
//         };

//         if (item.name !== "" && item.email !== "" && item.password !== "" && item.number !== "") {
//             addItem(item);
//             nameInput.value = "";
//             emailInput.value = "";
//             passwordInput.value = "";
//             numberInput.value = "";
//             genderInputs.forEach(input => input.checked = false);
//             hobbiesInputs.forEach(input => input.checked = false);
//             citySelect.value = "New York";
//         } else {
//             alert("Please fill in all fields!");
//         }
//     });

//     // Initial rendering
//     renderItems();
// });



document.addEventListener("DOMContentLoaded", function() {
    const itemForm = document.getElementById("itemForm");
    const itemList = document.getElementById("itemList");
    const submitButton = document.getElementById("submitButton");
    
    let items = [];

    // Function to render items
    function renderItems() {
        itemList.innerHTML = "";
        items.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `Name: ${item.name} | Email: ${item.email} | Password: ${item.password} | Number: ${item.number} | Gender: ${item.gender} | Hobbies: ${item.hobbies.join(", ")} | City: ${item.city}`;
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.className = "edit-btn";
            editButton.addEventListener("click", () => {
                editItem(index);
            });
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-btn";
            deleteButton.addEventListener("click", () => {
                deleteItem(index);
            });
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            itemList.appendChild(li);
        });
    }

    // Function to add item
    function addItem(item) {
        items.push(item);
        renderItems();
    }

    // Function to delete item
    function deleteItem(index) {
        items.splice(index, 1);
        renderItems();
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

        submitButton.textContent = "Save Changes";
        submitButton.removeEventListener("click", addItem);
        submitButton.addEventListener("click", function(event) {
            event.preventDefault();
            item.name = nameInput.value.trim();
            item.email = emailInput.value.trim();
            item.password = passwordInput.value.trim();
            item.number = numberInput.value.trim();
            item.gender = Array.from(genderInputs).find(input => input.checked)?.value || "Not Specified";
            item.hobbies = Array.from(hobbiesInputs).filter(input => input.checked).map(input => input.value);
            item.city = citySelect.value;

            renderItems();
            clearForm();
        });
    }

    // Function to clear form
    function clearForm() {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const numberInput = document.getElementById("number");
        const genderInputs = document.querySelectorAll('input[name="gender"]');
        const hobbiesInputs = document.querySelectorAll('input[name="hobby"]');
        const citySelect = document.getElementById("city");

        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        numberInput.value = "";
        genderInputs.forEach(input => input.checked = false);
        hobbiesInputs.forEach(input => input.checked = false);
        citySelect.value = "New York";

        submitButton.textContent = "Add Item";
        submitButton.removeEventListener("click", editItem);
        submitButton.addEventListener("click", addItem);
    }

    // Event listener for form submission
    itemForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const numberInput = document.getElementById("number");
        const genderInputs = document.querySelectorAll('input[name="gender"]');
        const hobbiesInputs = document.querySelectorAll('input[name="hobby"]');
        const citySelect = document.getElementById("city");

        const gender = Array.from(genderInputs).find(input => input.checked)?.value || "Not Specified";
        const hobbies = Array.from(hobbiesInputs).filter(input => input.checked).map(input => input.value);
        
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
            clearForm();
        } else {
            alert("Please fill in all fields!");
        }
    });

    // Initial rendering
    renderItems();
});
