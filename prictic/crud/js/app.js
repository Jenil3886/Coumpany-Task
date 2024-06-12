// starts for control codding

let addBtn = document.querySelector("#add-btn");
let model = document.querySelector(".model");
let closeBtn = document.querySelector(".close-icon");

addBtn.onclick = function () {
    model.classList.add("active")
}
closeBtn.addEventListener("click", () => {
    model.classList.remove("active");
});