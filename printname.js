const http = require('http');

const server = http.createServer((req, res) => {
  console.log("My name is Ruhaib.");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('My name is Ruhaib.\n');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
