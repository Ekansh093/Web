
class Book{

    constructor(name,author,type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
}


class Display{

    showBooks(book){
        let bookTable = document.getElementById("bookTable");
        let html = `
                <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>
        `;
        bookTable.innerHTML += html;
    }

    showMessage(type,message){
       let html = `
            <div class="alert alert-${type}" role="alert">
                ${message}
            </div>
        `;

        let errorMessage = document.getElementById("errorMessage");
        errorMessage.innerHTML = html;

        setTimeout(function(){
            errorMessage.innerHTML = "";
        }, 2000);
    }

    validate(){
        let nameElem = document.getElementById("bookName");
        let authorElem = document.getElementById("author");

        if(nameElem.value == "" || authorElem == ""){
            return false;
        }else{
            return true;
        }
    }

    clear(){
        let libForm = document.getElementById("libForm");
        libForm.reset();
    }

}






let libForm = document.getElementById("libForm");

libForm.addEventListener("submit", addBook);

function addBook(e){
    let nameElem = document.getElementById("bookName");
    let authorElem = document.getElementById("author");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");
    let fiction = document.getElementById("fiction");

    let typeOfBook;

    if(programming.checked){
        typeOfBook = programming.value;
    }else if(cooking.checked){
        typeOfBook = cooking.value;
    }else{
        typeOfBook = fiction.value;
    }

    let newBook = new Book(nameElem.value, authorElem.value, typeOfBook);
    let display = new Display();

    if(display.validate()){
        display.showBooks(newBook);
        display.clear();
        display.showMessage("success", "Your book has been added.")
    }else{
        display.showMessage("danger","Please fill all the fields.");
    }
    
    e.preventDefault();
}
