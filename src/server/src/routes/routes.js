const godRoutes = require("./godRoute");
const pantheonRoutes = require("./pantheonRoute");

function routes(server) {
  server.use(godRoutes);
  server.use(pantheonRoutes);
}

module.exports = routes;
