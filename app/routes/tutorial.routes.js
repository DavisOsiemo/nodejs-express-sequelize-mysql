module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    //Create a new Tutorial
    router.post("/", tutorials.create);

    //Retrieve all tutorials
    router.get("/", tutorials.findAll)

    //Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    //Retrieve all Unpublished Tutorials
    router.get("/unpublished", tutorials.findAllUnpublished);

    //Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    //Update a tutorial with id
    router.put("/:id", tutorials.update);

    //Delete a tutorial with id
    router.delete("/:id", tutorials.delete);

    //Delete all tutorials
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
}