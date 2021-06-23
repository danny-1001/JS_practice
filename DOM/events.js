const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNum = document.querySelector(".todo-num b");
const mainTitle = document.querySelector(".main-title");
// const items = todoList.children;

// //EVENT = Click, Scroll, resizing browser

// //EVENT LISTENER: Listens to one of these events

// button.addEventListener("click", addItem);

// function addItem() {
//   const newItem = document.createElement("li");
//   newItem.classList.add("item");
//   newItem.innerText = `Items ${items.length + 1}`;
//   todoList.appendChild(newItem);
//   todoNum.innerText = items.length;
// }

button.addEventListener("click", function () {
  mainTitle.style.color = "red";
});
