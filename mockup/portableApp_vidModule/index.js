let videojs = require('video.js');

let express = require('express');

let app = express();

let path = require('path');

let stream = require('./stream.js');


app.use(express.static(__dirname));

console.log(videojs.players);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));

    app.use(stream);
}).listen(3000);