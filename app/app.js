import express from "express";
require('dotenv').config();
import { urlencoded, json } from "body-parser";
import hotels from "./routes/api/hotels";
const app = express();
import cors from 'cors';

// Bodyparser middleware
app.use(json());
app.use(
  urlencoded({
    extended: false
  })
);

app.use(cors());

const API = '/api/v1';

app.use(`${API}/hotels`, hotels);

app.response.success = function success(content) {
  this.json({
      status: {
          code: 0,
          message: "OK"
      },
      data: content
  });
};

app.response.error = function error(message) {
  this.json({
      status: {
          code: 1,
          error: message
      }
  });
};

app.use( (req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  res.json({'errors': {
    message: err.message
  }});
});

module.exports = app;