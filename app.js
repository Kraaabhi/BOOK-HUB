const express = require('express');
const bodyParser = require('body-parser');
const booksRouter=require('./routes/booksRouter')
const { handleError } = require('./middleware/errorMiddleware');

// const logger = require('winston');

const app = express();

app.use(bodyParser.json());
app.use('/api', booksRouter);

// Error handling middleware
app.use(handleError);

module.exports = app;