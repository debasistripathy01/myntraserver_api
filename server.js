const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8082;

// server.use(middlewares);
server.use(middlewares)
server.use(router);

server.listen(8082, ()=>{
    console.log("Successfully Connected 8082")
});