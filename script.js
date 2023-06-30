const inputBox = document.getElementById("box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '')
    {
        alert("You must add something");     // if nothing added and user click add first time
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;    // Value from user to task list
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";     // cross tag
        li.appendChild(span);
    }
    inputBox.value = "";    // To empty text field
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML) // To store last modified data
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");      // Data to be stored in browser
}
showTask();