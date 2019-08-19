var router = require("express").Router();
var bookRoutes = require("./books");
router.use("/books", bookRoutes);





module.exports = router;