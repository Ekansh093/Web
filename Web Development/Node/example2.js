
const fs = require("fs");

let text = fs.readFileSync("text1.txt","utf-8");

console.log(text);

fs.writeFileSync("text2.txt",text.replace("This","Ekansh"));
