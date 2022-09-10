const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send(" Lashes in root!"));

router.get("/product", controllers.getProduct);

router.get("/user", controllers.getUser);

router.get("/review", controllers.getReview)

router.post("/user", controllers.createUser);

router.post("/review", controllers.createReview);

router.post("/user/:id", controllers.updateUser);

router.post("/review/:id", controllers.updateReview);

router.update("/review/:id", controllers.updateReview);

router.delete("/review/:id", controllers.deleteReview);

module.exports = router;
