const http = require("http"); //import http package for spinning our server
const app = require("./app");

const port = process.env.PORT || 3000; //port our server will run on

const server = http.createServer(app);

server.listen(port);
