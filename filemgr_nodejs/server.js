const express = require('express');
const app = express();

const HOST = '127.0.0.1';
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/uploaded", uploadFiles);

function uploadFiles(req, res) {
    console.log(req.body);
}

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started at http://${HOST}:${PORT}`);
});
