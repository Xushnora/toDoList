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
    
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "close-btn";
        deleteBtn.innerHTML = "+";
    
        let pushBtn = document.createElement("button");
        pushBtn.className = "close";
        pushBtn.innerHTML = "-";
    
        console.log(li);
    
        li.appendChild(newBox);
        newBox.appendChild(deleteBtn);
        newBox.appendChild(pushBtn);
        itemList.appendChild(li);
        itemInput.value = " ";
    }
}





