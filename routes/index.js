const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send(" Lashes in root!"));

router.get("/product", controllers.getProduct);

router.get("/product/:id", controllers.getProductById)

router.get("/user", controllers.getUser);

router.post("/user", controllers.createUser);

router.post("/user/:id", controllers.updateUser);

router.post("/product/:id", controllers.updateProduct);

router.delete("/product/:id", controllers.deleteProduct);

module.exports = router;
