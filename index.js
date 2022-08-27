const express = require('express');
const path = require('path');

const hostname = 'localhost';
const PORT = process.env.PORT || 3000;

const app = express();




app.use(express.static(path.join(__dirname, 'dist')));


app.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});
