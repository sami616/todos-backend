const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === "development") {
  server.use((_, __, next) => {
    setTimeout(next, 1000);
  });
}

server.use(middlewares);
server.use(router);

server.listen(port, () => console.log(`Running on http://localhost:${port}`));
