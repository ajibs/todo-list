'use strict';

// counter for new tasks
var counter = 0;


// on pressing enter key
function checkKey(e){
	if (e.keyCode == 13) newTask();
}


// add a new task item
function newTask(){
	let newTaskItem = document.getElementById('task'); 
	
	// retrieve input value
	let task = newTaskItem.value;
	newTaskItem.value = "";
	
	counter++;
	
	let allTaskItems = document.getElementById('allTasks');
	
	// insert the new task
	allTaskItems.innerHTML = allTaskItems.innerHTML +
	"<p class='items' id='task" + counter + "' onclick='deleteTask(this.id)'><input type='checkbox'>" + task + "</p>";
}


// delete selected task
function deleteTask(selectedId){
	document.getElementById(selectedId).remove();
}


