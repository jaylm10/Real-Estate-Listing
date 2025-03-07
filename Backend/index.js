const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path")
const MONGO_URL = 'mongodb://localhost:27017/RealEstate';
const authRouts = require('./routes/authRoutes');
const propertyRoutes = require("./routes/propertyRoutes")
const PORT = 3000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//connect to mongodb
mongoose.connect(MONGO_URL).then(()=>{
    console.log('Connected to MongoDB');
}).catch(()=>{
    console.log("Connection failed");
});

app.use("/",authRouts);
app.use("/api",propertyRoutes);



app.listen(PORT, () => {   
    console.log(`Server is running on http://localhost:${PORT}`);
});