// upload.js

const fs = require('fs');

// This function handles the image upload logic
module.exports = async function (req, res) {
    if (req.method === 'POST') {
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
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};

