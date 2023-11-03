// credit: some tutorial on the internet
// -Axel

const http = require("http");
const path = require("path");
const fileSystem = require("fs");

const host = 'localhost';
const port = 80;

const requestListener = function (req, res) {
    //res.setHeader("Content-Type", "text/html");
    //res.writeHead(200);
    //res.end(`<html><body><h1>This is HTML</h1></body></html>`);
    var filePath = path.join(__dirname, 'login.html');
    var stat = fileSystem.statSync(filePath);
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);

    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(res);
    //res.sendFile()
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});