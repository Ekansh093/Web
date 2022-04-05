
showNotes();
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {

    let noteTitle = document.getElementById("noteTitle");
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let newObj = {
        title: noteTitle.value,
        text: addTxt.value
    };

    notesObj.push(newObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    noteTitle.value="";    
    addTxt.value = "";
    showNotes();

});


function showNotes() {

    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function(element, index){

        html += `

        <div class="noteCard card my-2 mx-2" style="width: 16rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}: ${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
            </div>
        </div>

    `;

    });

    let notesElem = document.getElementById("notes");
    if(notesObj.length != 0){
        notesElem.innerHTML = html;
    }else{
        notesElem.innerHTML = `<h6>No notes are added right now!!</h6>`;
    }
}

function deleteNote(index){

    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let searchTxt = document.getElementById("searchTxt");

searchTxt.addEventListener("input", function(e){

    let inputVal = searchTxt.value.toLowerCase();

    let noteCards = document.getElementsByClassName("noteCard");

    Array.from(noteCards).forEach(function(element){

        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }

    });

});