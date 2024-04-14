// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");
const middlewares = jsonServer.defaults();

server.get("/echo", (req, res) => {
 // res.json(req.query);
    // Create a JSON object to send as response
  const response = {
    message: "This is an echo response",
    queryParameters: req.query
  };
  
  // Send the JSON object as response
  res.json(response);
});

server.use(middlewares);
// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
