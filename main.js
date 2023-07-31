const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNote(){
    notesContainer.innerHTML = localStorage.getItem("data");
}
showNote()
function updateNotesStoreg(){
    localStorage.setItem("data",notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img =document.createElement("img");
    inputBox.classList ='input-box';
    inputBox.setAttribute('contenteditable','true');
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    
})

notesContainer.addEventListener('click',function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateNotesStoreg();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll("input-box");
        notes.forEach(nt =>{
            nt.onkeyup =  function (){
                updateNotesStoreg();
            }
        })
    }
}
)

document.addEventListener("keydown", event=>{
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak")
        event.preventDefault();
    }
})
