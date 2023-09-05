let express = require('express');
let router = express.Router(); //uppercase Router constructor from the express package
let controller = require('../controllers/controller');

router.post("/", (req, res) => {
    controller.postCat(req, res);
//   });  ASK THE CONTROLLER TO PERFORM DB LOGIC
});

router.get("/", (req, res) => {
    controller.getAllCats(req, res);
  //   });  ASK THE CONTROLLER TO PERFORM DB LOGIC
});

module.exports = router;
