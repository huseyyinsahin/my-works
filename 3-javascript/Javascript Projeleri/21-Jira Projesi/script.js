const listColumns = document.querySelectorAll("drag-item-list");

const todoList = document.getElementById("todo-list");
const progressList = document.getElementById("progress-list");
const doneList = document.getElementById("done-list");

let todoListArray = [];
let progressListArray = [];
let doneListArray = [];
let listArrays = [];

let draggedItem;
let currentColumn;

let updatedOnLoad = false;

function getSavedColumns() {
  if (localStorage.getItem("todoItems")) {
    todoListArray = JSON.parse(localStorage.getItem("todoItems"));
    progressListArray = JSON.parse(localStorage.getItem("progressItems"));
    doneListArray = JSON.parse(localStorage.getItem("doneItems"));
  } else {
    todoListArray = ["React Entegrasyonu", "Angular Entegrasyonu"];
    progressListArray = ["Sengrid Entegrasyonu"];
    doneListArray = ["Verimor Entegrasyonu"];
  }
}

function updateSavedColums() {
  listArrays = [todoListArray, progressListArray, doneListArray];
  const arrayNames = ["todo", "progress", "done"];
  arrayNames.forEach((arrayName, index) => {
    localStorage.setItem(
      `${arrayName}Items`,
      JSON.stringify(listArrays[index])
    );
  });
}

function createItem(columnItem, column, item, index) {
  //   console.log(columnItem);
  //   console.log(column);
  //   console.log(item);
  //   console.log(index);

  const listItem = document.createElement("li");
  listItem.classList.add("drag-item");
  listItem.textContent = item;
  listItem.draggable = true;
  listItem.setAttribute = ("ondragstart", "drag(event)");
  columnItem.appendChild(listItem);
}

function allowDrop(e) {
  e.preventDefault();
}
function dragEnter(column) {
  // console.log(listColumns[column]);
  listColumns[column].classList.add("over");
  currentColumn = column;
}

function updateInsideArrays() {
  todoListArray = [];
  for (let i = 0; i < todoList.children.length; i++) {
    todoListArray.push(todoList.children[i].textContent);
  }
  progressListArray = [];
  for (let i = 0; i < progressList.children.length; i++) {
    progressListArray.push(progressList.children[i].textContent);
  }
  doneListArray = [];
  for (let i = 0; i < doneList.children.length; i++) {
    doneListArray.push(doneList.children[i].textContent);
  }

  updateDOM();
}

function drop(e) {
  e.preventDefault();
  const parent = listColumns[currentColumn];

  listColumns.forEach((column) => {
    column.classList.remove("over");
  });
  parent.appendChild(draggedItem);
  updateInsideArrays();
}

function drag(e) {
  draggedItem = e.target;
  console.log(draggedItem);
}

function updateDOM() {
  if (!updatedOnLoad) {
    getSavedColumns();
  }
  todoList.textContent = "";
  todoListArray.forEach((todoItem, index) => {
    createItem(todoList, 0, todoItem, index);
  });

  progressList.textContent = "";
  progressListArray.forEach((progressItem, index) => {
    createItem(progressList, 1, progressItem, index);
  });

  doneList.textContent = "";
  doneListArray.forEach((doneItem, index) => {
    createItem(doneList, 2, doneItem, index);
  });

  updatedOnLoad = true;
  updateSavedColums();
}

updateDOM();
