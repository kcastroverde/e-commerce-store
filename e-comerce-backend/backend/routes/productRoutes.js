const express = require("express");
const router = express.Router();
const {
  getCategoriesByStore,
  updateCategorie,
  deleteCategorie,
  getCategorieById
} = require("../controller/productControllers");
const { verifyAdmin } = require("../middleware/middleware");

router.get("/", getCategoriesByStore);
router.get("/:id", getCategorieById);
router.put("/:id", verifyAdmin, updateCategorie);
router.delete("/:id", verifyAdmin, deleteCategorie);

module.exports = router;
