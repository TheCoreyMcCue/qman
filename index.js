const express = require('express');
require('./models/User');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');


// console.log(keys.MongoURI);

mongoose.connect(keys.MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
.then(res => console.log('Connected to DB'))
.catch(err => console.log('Not Connected to the DB: ', err));

const app = express();

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000
app.listen(PORT);