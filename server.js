// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)



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


 /* creating a custom router return a single obj*/

 server.get('/entregasuportex', (req,res) => {
	const {id} = req.query
	const entregaSuporte = router.db.get("entregasuporte").value()

	const single = entregaSuporte.find(val => val.id == id)

	if(!single){
		res.json({"status:": 404, "message": 'Content not found'})
	}
	
	res.json(single)
 })




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
