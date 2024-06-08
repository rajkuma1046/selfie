// Node.js server code to handle image upload
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json({ limit: '10mb' }));

app.post('/upload', (req, res) => {
    const imgData = req.body.image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(imgData, 'base64');

    // Save the image to the server
    fs.writeFile('selfie.png', buffer, err => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error saving the image' });
        } else {
            res.send({ message: 'Image uploaded successfully' });
        }
    });
});

app.use(express.static('.'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
