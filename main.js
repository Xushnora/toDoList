const itemInput = document.querySelector('input[type = "text"]');
const itemList = document.querySelector('#todoList');
const form = document.querySelector('.todo-form');

// itemInput.addEventListener("keyup", runEvent);

// function runEvent(e) {
//     // console.log("Event type: " + e.type);

//     console.log(e.target.value);
// }


form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    let newItem = itemInput.value;

    if (newItem === "") {
        alert("Nimadir yozing !!!");
    }
    else {
        let li = document.createElement("li");
        li.className = "list-item";
        li.appendChild(document.createTextNode(newItem));
        
        let newBox = document.createElement("div");
        newBox.className = "buttons-div";
    
        let pushBtn = document.createElement("button");
        pushBtn.className = "close";
        pushBtn.innerHTML = "-";

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "close-btn";
        deleteBtn.innerHTML = "+";

        pushBtn.addEventListener('click', removeBtn);

        function removeBtn() {
            li.remove();
        }

        deleteBtn.addEventListener('click', overlineBtn);

        function overlineBtn() {
            li.style.textDecoration = "line-through";
            li.style.color = "green";3
        }
    
        console.log(li);
    
        li.appendChild(newBox);
        newBox.appendChild(deleteBtn);
        newBox.appendChild(pushBtn);
        itemList.appendChild(li);
        itemInput.value = " ";
    }
}





