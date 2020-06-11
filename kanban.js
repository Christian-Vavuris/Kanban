

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    console.dir(taskNameInput);

    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput);

    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj);
}


var createTaskEl = function (taskDataObj){
        // create list item
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";
     
        // create div to hold list item
        var taskInfoEl = document.createElement("div");
        // give it a name 
        taskInfoEl.className = "task-info"
        // add HTML content to Div
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "<h3><span class='task-type'>" + taskDataObj.type + "</span>";
    
        listItemEl.appendChild(taskInfoEl)
    
        // listItemEl.textContent = taskNameInput;
        tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);




