const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const app = express();
require("dotenv").config;


//middleware
app.use(cors());
app.use(express.json());

app.use('/api/auth',userRoutes);
mongoose.connect(procees.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("DB connected successfully");
}).catch((error)=>{
    consloe.log(error.message);
});






const server=app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);

})