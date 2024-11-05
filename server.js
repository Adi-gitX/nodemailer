// server.js
require('dotenv').config();
const express = require('express');
const sendEmailController = require('./controllers/sendEmailController');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/sendemail', sendEmailController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
