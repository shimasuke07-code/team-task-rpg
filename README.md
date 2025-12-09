# team-task-rpg
Gamified task manager with missions, rewards, and team collaboration
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Team Task RPG</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Team Task RPG</h1>

    <div id="avatar">
        <p>アバター: <span id="avatarName">勇者</span></p>
        <p>レベル: <span id="level">1</span></p>
        <p>経験値: <span id="exp">0</span></p>
    </div>

    <div id="taskSection">
        <h2>今日のタスク</h2>
        <ul id="taskList">
            <!-- タスクがここに追加されます -->
        </ul>
        <input type="text" id="newTaskInput" placeholder="タスクを追加">
        <button id="addTaskBtn">追加</button>
    </div>

    <script src="main.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f8ff;
    text-align: center;
    padding: 20px;
}

h1 {
    color: #3333cc;
}

#avatar, #taskSection {
    margin: 20px auto;
    padding: 10px;
    border: 2px solid #3333cc;
    width: 300px;
    border-radius: 10px;
    background-color: #ffffff;
}

button {
    padding: 5px 10px;
    margin-top: 5px;
    cursor: pointer;
}

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
