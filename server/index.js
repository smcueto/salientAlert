const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
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

if (process.env.NODE_ENV === 'production') {
  /**
   * Express will serve up production assets
   * like our main.js file or main.css file!
   */
  app.use(express.static('client/build'));

  /**
   * Express will serve up the index.html file
   * if it doesn't recognize the route.
   */
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
