const btnClear = document.querySelector("#clear-button");

btnClear.addEventListener("click", function () {
  console.log("Το κουμπί πατήθηκε");
  document.getElementById("todo-list").innerHTML = "";
});

const addedItem = document.querySelector("#new-item");
const todoList = document.querySelector("#todo-list");

addedItem.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    addItem();
  }
});

function addItem() {
  console.log(addedItem.value);
  let newItem = addedItem.value;
  if (newItem.length > 0) {
    var item = document.createElement("li");

    item.textContent = newItem;

    item.addEventListener("dblclick", deleteItem);
    item.addEventListener("click", lineItem);

    todoList.appendChild(item);

    addedItem.value = "";
  }
  function deleteItem() {
    this.remove();
  }

  function lineItem() {
    this.classList.toggle("completed");
    if (this.classList.contains("completed") == false) {
      this.setAttribute("style", "color:red");
    } else {
      this.setAttribute("style", "color:black");
    }
  }
}
