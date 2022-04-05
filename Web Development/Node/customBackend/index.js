const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  url = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if(url == '/'){
    res.end(home);
  }
  else if(url == '/about'){
    res.end(about);
  }
  else{
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
