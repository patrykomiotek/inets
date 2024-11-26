import { createServer, IncomingMessage, ServerResponse } from 'http';

const port = 3000;

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Create a JavaScript object to send as JSON
    const responseObject = {
      message: 'Hello, World!',
      status: 'success',
    };

    // Convert the object to a JSON string and send it
    res.end(JSON.stringify(responseObject));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};

const server = createServer(requestListener);

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
