const express = require("express");
const router = express.Router();
const {upload,createProperty,getProperty} = require("../controllers/propertyController");

router.post("/properties",upload.single("image"),createProperty);
router.get("/properties",getProperty);

module.exports = router;

