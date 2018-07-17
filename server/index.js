const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = Number(process.env.PORT || 5000);
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
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(PORT, () => {
  console.log('Server is running on Port: ', PORT);
});
