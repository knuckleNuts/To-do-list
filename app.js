//this function is complete
function addtask() {
  document.getElementById("add").disabled = true;
  //this will create and append these elements so the user can add a task
  const div = document.createElement("div");
  const box = document.getElementsByClassName("boxes");
  const li = document.createElement("input");
  const submit = document.createElement("input");
  submit.type = "submit";
  //creating the text
  li.placeholder = "add a task";
  submit.innerHTML = "Add task";
  //appending elements
  document.getElementsByClassName("boxes")[0].appendChild(submit);
  document.getElementsByClassName("boxes")[0].appendChild(li);
  submit.onclick = () => {
    li.id = "taskcontent";
    submit.id = "submit";
    const input = document.getElementById("taskcontent");
    const task = input.value.trim();
    if (task === "") {
      window.alert("No task assigned!");
    } else {
      const newTask = document.createElement("li");
      newTask.innerHTML = "-" + task;
      //create the remove button and give it the function to remove itself;
      const removebtn = document.createElement("button");
      removebtn.onclick = () => {
        newTask.remove();
      }
      removebtn.id = "removebtn";
      removebtn.textContent = "X";
      newTask.appendChild(removebtn);
      document.getElementsByClassName("tasks")[0].appendChild(newTask);
      window.alert("Task added!");
      //clear and remove the buttons
      input.value = "";
      document.getElementById("add").disabled = false;
      document.getElementById("task").remove();
      document.getElementById("submit").remove();
    }
  }
}


