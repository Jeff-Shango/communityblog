const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

//Multer storage configuration 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Multer file upload 
const upload = multer ({ storage });

// Upload endpoint 
app.post('/api/upload', upload.single('file'), (req, res) => {
    if(!req.file) {
        return res.status(400).json({ message: 'No damn file uploaded' });
    }
    // Access uploaded file properties 
    const { originalname, filename, size } = req.file;
    //Respond with file details 
    res.json({
        message: 'File uploaded successfully',
        file: {
        originalname,
        filename,
        size
    }
  });
});

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});