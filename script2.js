let list = document.querySelector("#myList");
let btn = document.querySelector("#addBtn");
btn.addEventListener("click", function () {
    let newLi = document.createElement("li");
    newLi.innerText = "New Item";
    let count = list.children.length + 1;
    if (count % 2 !== 0) {
        newLi.style.fontWeight = "bold";
        newLi.style.color = "blue";
    }
    else {
        newLi.style.fontStyle = "italic";
        newLi.style.color = "red";
    }

    list.appendChild(newLi);
});