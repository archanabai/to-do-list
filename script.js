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
        // span.innerHTML="edit";
         li.appendChild(span);
         span.addEventListener("click",()=>{
            
         })
         
    }
}
 