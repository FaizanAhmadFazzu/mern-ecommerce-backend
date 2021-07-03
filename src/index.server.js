const express = require("express");
const env = require("dotenv");
const mongoose = require('mongoose');

// routes
const authRoutes = require("./routes/auth");



app = express();


// Environmet variables or you can say constants
env.config();

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.pocaj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log("Databse connected")
})

app.use(express.json());
app.use("/api", authRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
