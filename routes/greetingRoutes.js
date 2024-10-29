const express = require('express');
const path = require('path');
const router = express.Router();
const greetingController = require('../controllers/greetingController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/upload', upload.single('image'), greetingController.createGreeting);

router.get('/greeting/:uniqueId', greetingController.getGreeting);

module.exports = router;
