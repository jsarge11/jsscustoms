const express = require('express');
const contr = require('./controller.js');
const winston = require('winston');
const cors = require('cors');
const { formatDate } = require('./util/fns');

let app = express();
app.use(express.static(`${__dirname}/../build`));
let whitelist = ['http://localhost:3000'];
app.use(
  cors({
    origin: whitelist,
    credentials: true,
  })
);

const logger = winston.createLogger({
  transports: [new winston.transports.File({ filename: 'requests.log' })],
});

app.use(express.json());
app.use((req, res, next) => {
  logger.log({ data: req.body, date: formatDate(new Date()), level: 'info' });
  next();
});
app.post('/email', contr.sendEmail);

app.listen(7000, console.log('Listening on port 7000'));
