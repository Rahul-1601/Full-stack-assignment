const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let editMode = false;
let editedTask = null;

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" onclick="toggleTaskStatus(this)">
    <span>${taskText}</span>
    <button class="edit" onclick="editTask(this)">Edit</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(li);

  taskInput.value = "";
}

function deleteTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

function toggleTaskStatus(checkbox) {
  const taskText = checkbox.nextElementSibling;
  if (checkbox.checked) {
    taskText.style.textDecoration = "line-through";
  } else {
    taskText.style.textDecoration = "none";
  }
}

function editTask(button) {
  if (editMode) {
    saveEditedTask();
  } else {
    enterEditMode(button);
  }
}

function enterEditMode(button) {
  editMode = true;
  editedTask = button.parentElement;
  const taskText = editedTask.querySelector("span");
  const editButton = editedTask.querySelector(".edit");
  taskText.contentEditable = "true";
  editButton.textContent = "Save";
  taskText.focus();
}

function saveEditedTask() {
  editMode = false;
  const taskText = editedTask.querySelector("span");
  const editButton = editedTask.querySelector(".edit");
  taskText.contentEditable = "false";
  editButton.textContent = "Edit";
}
