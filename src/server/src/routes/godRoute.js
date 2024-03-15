const { Router } = require("express");
const godController = require("../controllers/godController");

const router = Router();

router
  .get("/gods", godController.getAll)
  .get("/gods/:id", godController.getById)
  .post("/gods", godController.create)
  .put("/gods/:id", godController.update)
  .delete("/gods/:id", godController.delete);

module.exports = router;
