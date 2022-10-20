const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return res.end('Welcome to home page');
  }
  if (req.url === '/about') {
    return res.end('welcome to about page');
  }

  return res.end(`
  <h1>Oops!</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, nemo?</p>
  <a href="/">Back Home</a>
  `);
});

server.listen(5000);
