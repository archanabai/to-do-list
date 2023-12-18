const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
   const toDoCard = document.getElementById("to-do-card");
    toDoCard.style.backgroundImage="none";

    if(inputBox.value ===''){
        alert("You must have write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value='';
        let span = document.createElement("span");
         li.appendChild(span);
        saveData();
    }
}
 listContainer.addEventListener("click" ,(e)=>{
   if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
     saveData();

   }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
   }
 },false);

 function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
 }

 function showData(){
  listContainer.innerHTML = localStorage.getItem("data");
 }
 showData();
 