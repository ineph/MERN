const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;

app.use(cors());
app.use(express.json());

mongoose.connect(uri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

connection.once('open', () => {
    console.log("\x1b[32m", "MongoDB database connection established successfully");
});

app.listen(port,() => {
    console.log("\x1b[36m", `Server is running on port ${port}`);
});

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);