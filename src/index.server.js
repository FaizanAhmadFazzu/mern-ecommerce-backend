const express = require("express");
const env = require("dotenv");
const mongoose = require('mongoose');

app = express();


// Environmet variables or you can say constants
env.config();

mongoose.connect(
    'mongodb://localhost:27017/test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Databse connected")
})

app.use(express.json());

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Hello from Server"
    });
});

app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    });
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
