const taskList = document.querySelector("#task-list")
const textBox = document.querySelector("#text-box")
const addButton = document.querySelector("#add-btn")

const checkButton = document.querySelector("#check-all")
const checkOffButton = document.querySelector("#check-off-all")
const removeAll = document.querySelector("#remove-all")

addButton.addEventListener("click", function() {
    const taskText = textBox.value;
    textBox.value = "";

    if (taskText !== "") {
        taskList.appendChild(addTask(taskText));
        textBox.focus();
    }
    textBox.focus();
})

textBox.addEventListener("keypress", function(enter) {

    if (enter.keyCode == 13) {
        const taskText = textBox.value;
        textBox.value = "";

        if (taskText !== "") {
            taskList.appendChild(addTask(taskText));
            textBox.focus();
        }
        textBox.focus();
    }
})

function addTask(taskText) {
    const elementLI = document.createElement("li");
    const elementSPAN = document.createElement("span");

    elementSPAN.setAttribute("id","task");
    elementSPAN.textContent = taskText;

    elementLI.className = "not-realized";
    elementLI.appendChild(elementSPAN);
    elementLI.appendChild(addRemoveButton());

    elementSPAN.addEventListener("click", function() {
        if (this.id === "task") {

            if (this.parentNode.className === "not-realized") {
                this.parentNode.className = "realized"

            } else {
                this.parentNode.className = "not-realized"
            }
        }
    })

    return elementLI;
}

function addRemoveButton() {
    const removeButton = document.createElement("button");
    removeButton.textContent = "✖";
    removeButton.className = "btn-remove";

    removeButton.addEventListener("click", function() {
        taskList.removeChild(this.parentNode);
    })

    return removeButton;
}

checkButton.addEventListener("click", function() {
    const taskVector = taskList.querySelectorAll("#task");

    for (task of taskVector) {

            if (task.parentNode.className === "not-realized") {
                task.parentNode.className = "realized"
            }
}})

checkOffButton.addEventListener("click", function() {
    const taskVector = taskList.querySelectorAll("#task");

    for (task of taskVector) {

            if (task.parentNode.className === "realized") {
                task.parentNode.className = "not-realized"
            }
}})

removeAll.addEventListener("click", function() {
    const buttonVector = taskList.querySelectorAll(".btn-remove");

    for (button of buttonVector) {
        button.dispatchEvent(new Event("click"));
    }
})