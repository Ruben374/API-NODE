import express from "express";

//criar instancia do server
const server = express();

//configurar o servidor

server.get("/", (req: any, res: any) => {
  return res.send("ola dev");
});

export { server };
