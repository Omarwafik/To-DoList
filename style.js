var taskNameinput = document.getElementById("Taskname");
var taskDescinput = document.getElementById("Taskdes");
var taskStatusinput = document.getElementById("Taskstatus");
var taskProjectinput = document.getElementById("Taskproject");
var task =document.getElementById("Task");
var addButton=document.getElementById("addButton");
var updateButton=document.getElementById("updateButton");
var taskList=[];

function addTask(){
    if(taskNameinput.value == "" ||taskDescinput.value == "" || taskStatusinput.value == "" || taskProjectinput.value == ""){
        alert("please fill the content");
        return;
    }
    var Task={
        taskName : taskNameinput.value,
        taskDesc : taskDescinput.value,
        taskStat : taskStatusinput.value,
        taskProj : taskProjectinput.value,
    }
    taskList.push(Task);
    displayTask();
    clearInputs();
}

function displayTask(){
    var element="";
    for(i=0;i<taskList.length;i++){
            element+=`
            <div class="theTask p-3 rounded-4  m-auto mb-2" id="Task" style="background-color:rgba(41, 222, 125, 1)">
            <h3 class="">- ${taskList[i].taskName}</h3>
            <div class="d-flex justify-content-around p-2 fs-5">
            <p>- ${taskList[i].taskDesc}</p>
            <p>- ${taskList[i].taskStat}</p>
            <p>- ${taskList[i].taskProj}</p>
            <div class"justify-content-end">
            <a onclick="deleteTask(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></a>
            <a onclick="goToupdate(${i})" class="btn btn-primary"><i class="fa-solid fa-pen"></i></a>
            </div>
            </div>
            </div> `
            
    }
    task.innerHTML=element;
    // task.classList.remove("d-none");
}


function clearInputs(){
    taskNameinput.value=null;
    taskDescinput.value=null;
    taskStatusinput.value=null;
    taskProjectinput.value=null;
}

function deleteTask(index) {
    //   alert("hi");
   taskList.splice(index, 1);
    //   alert(index);
    displayTask();
  }

function goToupdate(index){
    cindex=index;
    taskNameinput.value= taskList[index].taskName;
    taskDescinput.value= taskList[index].taskDesc;
    taskStatusinput.value= taskList[index].taskStat;
    taskProjectinput.value= taskList[index].taskProj;

    
    addButton.classList.add("d-none");
    updateButton.classList.remove("d-none");
}

function updateTask(){
    var Task={
        taskName : taskNameinput.value,
        taskDesc : taskDescinput.value,
        taskStat : taskStatusinput.value,
        taskProj : taskProjectinput.value,
    }
    taskList.splice(cindex,1, Task)
    displayTask();
    clearInputs();
    addButton.classList.remove("d-none");
    updateButton.classList.add("d-none");
}