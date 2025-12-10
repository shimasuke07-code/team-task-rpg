document.getElementById("addTaskBtn").onclick = function() {
    const taskInput = document.getElementById("newTaskInput");
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;
    li.onclick = function() {
        this.style.textDecoration = "line-through";
        alert("タスク完了！経験値+10");
        let expElem = document.getElementById("exp");
        expElem.textContent = parseInt(expElem.textContent) + 10;
    };

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
};
