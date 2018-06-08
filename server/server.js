const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4200;
const cors = require('cors');
const config = require('./database/DB');
const iceRaidRoutes = require('./routes/IceServerRoutes');
const checkPointRoutes = require('./routes/CheckServerRoutes');

mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

<<<<<<< HEAD
app.use('/iceraids', iceRaidRoutes);
app.use('/checkpoints', checkPointRoutes);
=======
app.use('/serverport', ServerPortRouter);
>>>>>>> e7a63042e4306d5588156a7c3a073ab8f4e9f850

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});