const express = require('express');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/static')));

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});