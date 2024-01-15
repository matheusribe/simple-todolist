function addTask(){
    var taskInput = document.getElementById('newTask');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() != '') {
        var newTask = document.createElement('li');
        newTask.className = "group flex items-center justify-between p-2 border-b w-[400px]";
        newTask.innerHTML="<span>" + taskInput.value.trim() + "</span>" + "<button class='hover:text-lime-500 hidden group-hover:block bg-slate-800 p-1 rounded hover:bg-slate-900' onclick='removeTask(this)'>Done</button>";

        taskList.appendChild(newTask);
        taskInput.value = '';
    } else  {
        Toastify({
            text: "Error: Add a Task!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #991b1b, #1e293b)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
}

function removeTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);

    Toastify({
        text: "Congratulations on finishing your task!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #064e3b, #1e293b)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}