// const http = require("http");
// const { getCharById } = require("./controllers/getCharById");

// const PORT = 3001;

// http
//   .createServer((req, res) => {
//     console.log(`Server raised in port ${PORT}`);
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").pop();

//       getCharById(res, +id);
//       return;
//     }

//     res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
//     res.end("Ruta no válida");
//   })
//   .listen(PORT, "localhost");

const express = require("express");
const { router } = require('./routes/index')
const server = express();
const PORT = 3001;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  next();
});

server.use(express.json())

server.use('/rickandmorty', router)

server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);

});
