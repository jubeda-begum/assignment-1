const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", function () {
  const taskText = input.value.trim();
  if (taskText === "") return;  
  const li = document.createElement("li");
  li.textContent = taskText;
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Complete";
  doneBtn.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(doneBtn);
  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = "";  // clear input
});