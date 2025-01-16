const multer = require("multer");
const Property = require("../models/Sell");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

//post
const createProperty = async(req, res) => {
  try {
    const {
      firstName,
      email,
      phone,
      street,
      city,
      state,
      zip,
      saleOrRent,
      price,
      beds,
      baths,
      sqft,
      description,
    } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newProperty = new Property({
      firstName,
      email,
      phone,
      street,
      city,
      state,
      zip,
      saleOrRent,
      price,
      beds,
      baths,
      sqft,
      description,
      image: imageUrl,
    });
    await newProperty.save();
    res.status(201).json({ message: "Property created successfully", property: newProperty });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

//get
const getProperty = async (req, res) => {
  try {
    const {
      location,
      saleOrRent,
      minPrice,
      maxPrice,
      beds,
      baths,
    } = req.query;

    // Build dynamic query
    const query = {};
    if (location) query.city = new RegExp(location, "i"); // Case-insensitive search
    if (saleOrRent) query.saleOrRent = saleOrRent;
    if (minPrice) query.price = { ...query.price, $gte: parseFloat(minPrice) }; // Greater than or equal
    if (maxPrice) query.price = { ...query.price, $lte: parseFloat(maxPrice) }; // Less than or equal
    if (beds) query.beds = parseInt(beds); // Exact match for beds
    if (baths) query.baths = parseInt(baths); // Exact match for baths

    // Fetch filtered properties from database
    const properties = await Property.find(query);

    res.json(properties);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};



module.exports = {
    upload,
    createProperty,
    getProperty,
  };
