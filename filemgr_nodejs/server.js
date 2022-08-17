const express = require('express');
const path = require('path');
const app = express();

const multer = require("multer");
const upload = multer({ dest: "uploaded/" });

const HOST = '127.0.0.1';
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/fileupload", upload.array("archive-input"), uploadFiles);

function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Upload done!!" });
}

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started at http://${HOST}:${PORT}`);
});
