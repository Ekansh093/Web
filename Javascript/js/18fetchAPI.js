console.log("Fetch API");

////////////////////////// GET Request///////////////

// function getData(){
//     let url = "ajax.txt"

//     fetch(url)
//     .then(response => response.text())
//     .then(data => console.log(data));
// }

function getData(){
        let url = "https://jsonplaceholder.typicode.com/posts"
    
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}

// getData();

////////////////////////// POST Request///////////////

function postData(){

    let url = "https://jsonplaceholder.typicode.com/posts";
    
    let data = {
        title: 'test928390280',
        body: 'bar',
        userId: 923809
      };

    let params = {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(data)
    };

    fetch(url,params)
    .then(response => response.json())
    .then(res => console.log(res))

}

postData();