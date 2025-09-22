const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path")
const dotenv = require('dotenv')

const authRouts = require('./routes/authRoutes');
const propertyRoutes = require("./routes/propertyRoutes")

const app = express();
dotenv.config()

const corsOptions = {
  origin: process.env.CORS_ORIGIN //  Vercel frontend URL
};

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//connect to mongodb
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch(()=>{
    console.log("Connection failed");
});

app.use("/",authRouts);
app.use("/api",propertyRoutes);



app.listen(process.env.PORT, () => {   
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});