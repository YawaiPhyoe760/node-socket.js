let http = require('http');
let url = require('url');
require('dotenv').config()

let routes = {
    "GET": {
        "/": (req, res) => {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.end("<h1>GET Method =>/ routes</h1>");
        },
        "/home": (req, res) => {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.end("<h1>GET Method =>/home routes</h1>");
        }
    },
    "POST": {
        "/": (req, res) => {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.end("<h1>POST Method =>/ routes");
        },
        "/about": (req, res) => {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.end("<h1>POST Method =>/about routes");
        }
    }
}
let start = (req, res) => {
    let reqMethod = req.method;
    let params = url.parse(req.url, true);
    let name = params.query.name;
    let age = params.query.age;
    console.log("Name ", name, "Age ", age);
    routes[reqMethod][params.pathname](req, res);

}

let server = http.createServer(start);
server.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}!`);
});