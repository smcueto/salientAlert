const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const cors = require('cors');
const config = require('./database/DB');
const iceRaidRoutes = require('./routes/IceServerRoutes');
const checkPointRoutes = require('./routes/CheckServerRoutes');

mongoose.connect(config.DB).then(
  () => { console.log('Database is connected'); },
  (err) => {
    console.log(`Can not connect to the database${err}`);
  },
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/iceraids', iceRaidRoutes);
app.use('/checkpoints', checkPointRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running on Port: ', PORT);
});
