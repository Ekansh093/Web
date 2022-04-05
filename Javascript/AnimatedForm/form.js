

function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-right");
    arrows.forEach(arrow => {
        arrow.addEventListener("click",function(e){
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            
            if(input.type == "text" && validateUser(input)){
                nextSlide(parent, nextForm);
            }else{
                parent.style.animation = "shake 0.5s ease";
            }

            parent.addEventListener("animationend",function(){
                parent.style.animation = "";
            });
        });
    });
}

function validateUser(user){
    if(user.value.length<6){
        console.log("error");
        error("rgb(189,87,87)");
    }else{
        error("rgb(87, 189, 130)");
        return true;
    }
}

function error(color){
    document.body.style.backgroundColor = color;
}

function nextSlide(parent, nextForm){
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
    nextForm.classList.remove("inactive");
}

animatedForm();