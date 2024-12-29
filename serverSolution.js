const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task asynchronously
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    if (count >= 1000000000) {
      clearInterval(intervalId);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World');
    }
  }, 0);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});