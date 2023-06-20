const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.delete("/items/:id", itemControllers.destroy);

const userControllers = require("./controllers/userControllers");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", hashPassword, userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete("/users/:id", userControllers.destroy);

const authControllers = require("./controllers/authControllers");

router.post(
  "/login",
  authControllers.getUserByUsernameWithPasswordAndPassToNext,
  verifyPassword
);

router.use(verifyToken); // mur d'authentification

router.post("/items", itemControllers.add);
router.get("/items", itemControllers.browse);

module.exports = router;
