require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const response = require('./middleware/response');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

const handleError = require('./middleware/error');

const app = express();

app.use(cors());

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(response);

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.use(handleError);

app.listen(process.env.PORT, () => {
  console.log('application running on', `http://localhost:${process.env.PORT}`);
});
