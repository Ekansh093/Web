console.log("Callback tutorial");


let students = [
    {name: "Ekansh", age:27},
    {name: "Ekta", age:25}
];

function enrollStudent(callback){
    let student = {name: "Asha", age: 52};
    return new Promise(function(resolve, reject){
        const error = false;
        setTimeout(function(){
            students.push(student);
            if(!error){
                resolve();
            }else{
                reject();
            }
        },1000);
    });
    
}

function getStudents(){
    let str="";

    students.forEach(function(element) {
        str += `<li>${element.name}</li>`;
    });
    document.getElementById("studentList").innerHTML = str;
};

enrollStudent().then(function(){
    console.log("Student enrolled");
    getStudents();
}).catch(function(){
    console.log("Error while enrolling student");
});
// getStudents();