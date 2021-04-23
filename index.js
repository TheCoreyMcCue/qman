const express = require('express');
require('./services/passport');
require('./models/User');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

const app = express();

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000
app.listen(PORT);