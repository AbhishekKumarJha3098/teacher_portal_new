const express = require("express");
const router = express.Router();
const {userAdd,userList,userDelete,userUpdate,getSingleUser} = require("../controller/controller");

const bodyParser = require("body-parser");
router.use(bodyParser.json());

// User Access Routes
router.get("/", (req, res) => {
  res.send("Hello World Home ");
});

router.get("/all", userList);
router.post("/add", userAdd);
router.delete("/delete/:id",userDelete );
router.put("/update/:id",userUpdate);
router.get("/single/:id",getSingleUser);

// router.put("/update", userUpdateValidator, auth, userController.userUpdate);

module.exports = router;