const express = require("express");
const route = require("./routes/routes");

const server = express();

const PORT = process.env.PORT || 3030;

route(server);

server.listen(PORT, () => {
  console.log(`Server is running here: http://localhost:${PORT}/`);
});
