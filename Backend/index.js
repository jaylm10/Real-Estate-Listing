const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MONGO_URL = 'mongodb://localhost:27017/RealEstate';
const authRouts = require('./routes/authRoutes');
const PORT = 3000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to mongodb
mongoose.connect(MONGO_URL).then(()=>{
    console.log('Connected to MongoDB');
}).catch(()=>{
    console.log("Connection failed");
});

app.use("/",authRouts);


app.listen(PORT, () => {   
    console.log(`Server is running on http://localhost:${PORT}`);
});