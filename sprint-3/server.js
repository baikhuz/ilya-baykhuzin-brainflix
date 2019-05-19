const express = require('express');
const cors = require('cors');
const videoRoutes = require('./routes/video-routes')
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('assets'));
app.use(cors());

app.use('/videos', videoRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));