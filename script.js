let userName = document.getElementById("username");
console.log(userName);

let plannerTitle = document.querySelector(".title");
console.log(plannerTitle);

const tomatoIcon = document.getElementById("tomato-icon");

const enterButton = document.getElementById("username-button");
enterButton.addEventListener("click", function () {
  const inputUserName = userName.value;
  plannerTitle.innerHTML = `<img id="tomato-icon" src="./images/favicon-32x32.png" alt="tomato-icon"> ${inputUserName}'s pomodoro plan for today <img id="tomato-icon" src="./images/favicon-32x32.png" alt="tomato-icon"> `;
});

let myForm = document.getElementById("pomodoro-form");
console.log(myForm);

const tasks = [];
let taskList = document.getElementById("child-ol");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const minutes = myForm.minute.value;
  const task = myForm.task.value;
  const isValid = validateTaskForm(minutes, task);
  if (isValid) {
    const newLi = document.createElement("li");
    newLi.innerHTML = `For ${minutes} minutes: ${task}.`;
    taskList.appendChild(newLi);

    const liCollection = document.querySelectorAll("#child-ol li");
    const breakTime = document.createElement("p");
    liCollection.forEach((item, index) => {
      if ((index + 1) % 4 == 0) {
        breakTime.innerHTML = `Take a 20-minute break. <br/>
    <img id="tomato-icon" src="./images/favicon-32x32.png" alt="tomato-icon"><img id="tomato-icon" src="./images/favicon-32x32.png" alt="tomato-icon"><img id="tomato-icon" src="./images/favicon-32x32.png" alt="tomato-icon"><img id="tomato-icon" src="./images/favicon-32x32.png" alt="tomato-icon">`;
        newLi.appendChild(breakTime);
      } else {
        breakTime.innerHTML = `Take a 5-minute break.`;
        newLi.appendChild(breakTime);
      }
    });
  }
});

function validateTaskForm(minutes, task) {
  if (minutes < 4 || minutes > 90) {
    alert("mininum 5 mins, maximum 90 mins");
    return false;
  }
  if (task.trim() == "") {
    alert("Enter a task");
    return false;
  }
  return true;
}

const nodeCurrPlan = document.querySelector(".pomodoro-list");
const duplicateButton = document.getElementById("duplicate-button");
duplicateButton.addEventListener("click", function () {
  const clone = taskList.cloneNode(true);
  nodeCurrPlan.appendChild(clone);
});

const undoButton = document.getElementById("undo-duplicate");
undoButton.addEventListener("click", function () {
  console.log("lastChild", nodeCurrPlan.lastChild);
  const duplicatedChild = nodeCurrPlan.lastChild;
  nodeCurrPlan.removeChild(duplicatedChild);
});

const fontOptionsForm = document.getElementById("font-options");
const fontSelect = document.getElementById("font");

// Add an event listener for form submission
fontOptionsForm.addEventListener("change", function (event) {
  event.preventDefault();

  const selectedFont = fontSelect.value;
  const listDiv = document.getElementById("parent-list");
  listDiv.style.fontFamily = `${selectedFont}`;
});
