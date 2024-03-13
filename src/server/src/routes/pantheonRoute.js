const { Router } = require("express");
const pantheonController = require("../controllers/pantheonController.js");

const router = Router();

router
  .get("/pantheons", pantheonController.getAll)
  .get("/pantheons/:id", pantheonController.getById)
  .post("/pantheons", pantheonController.create)
  .put("/pantheons/:id", pantheonController.update)
  .delete("/pantheons/:id", pantheonController.delete);

module.exports = router;