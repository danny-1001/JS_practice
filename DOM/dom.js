// const headers = document.getElementsByTagName("h2");
// const list = document.getElementsByClassName("item");
// console.log(list);

//querySelector, returns node list

// const headers = document.querySelectorAll("h2");
// const list = document.querySelector(".item");
// const button = document.querySelector("#submit");
// console.log(button);
// console.log(list)
// console.log(headers);

//---------------------------------------------------------//
const collectionItems = document.getElementsByClassName("item");
const todoList = document.getElementById("todo-list");
const todoNum = document.getElementsByClassName("todo-num")[0];
// const nodeItems = document.querySelectorAll(".item");
const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "item 3";

todoList.appendChild(newItem);

//Update amount of Items
todoNum.innerText = collectionItems.length;

// console.log(collectionItems,nodeItems);
// console.log(nodeItems.children)

// for (item of nodeItems) {
//   console.log(item);
// }

// nodeItems.forEach(function (item) {
//   console.log(item);
// });
