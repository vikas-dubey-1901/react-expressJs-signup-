const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/route');
const cors = require('cors');

const app = express();
app.use(express.json({ limit: '10kb' }));

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/api', userRouter);

app.listen(4000, () => console.log('server running on port 3000...'));
