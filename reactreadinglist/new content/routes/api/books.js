var router = require("express").Router();
var booksController = require("../../controllers/bookController");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

router.route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;