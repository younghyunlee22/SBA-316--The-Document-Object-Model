let userName = document.getElementById("username");
console.log(userName);

let plannerTitle = document.querySelector(".plannerTitle");
console.log(plannerTitle);

const tomatoIcon = document.getElementById("tomato-icon");

const enterButton = document.getElementById("username-button");
enterButton.addEventListener("click", function () {
  const inputUserName = userName.value;
  plannerTitle.innerHTML = `${inputUserName}'s pomodoro planner <img id="tomato-icon" src="./images/favicon-32x32.png" alt="tomato-icon"> `;
});

let myForm = document.getElementById("pomodoro-form");
console.log(myForm);

const tasks = [];
let taskList = document.getElementById("task-list");
console.log(taskList);

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const minutes = myForm.minute.value;
  const task = myForm.task.value;
  console.log(minutes, task);
  const newLi = document.createElement("li");
  newLi.innerHTML = `For ${minutes}minutes: ${task}.`;
  taskList.appendChild(newLi);
  tasks.push(task);
  console.log(tasks);
});

// function validateTaskForm() {}

const duplicateButton = document.getElementById("duplicate-button");
console.log(duplicateButton);
duplicateButton.addEventListener("click", function () {
  const nodeCurrPlan = document.querySelector(".pomodoro-list");
  const clone = nodeCurrPlan.cloneNode(true);
  nodeCurrPlan.appendChild(clone);
});
