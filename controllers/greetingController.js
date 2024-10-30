const Greeting = require('../models/Greeting');
const cloudinary = require('../config/cloudinaryConfig.js'); // import the Cloudinary config
const { v4: uuidv4 } = require('uuid'); // for generating unique IDs
const fs = require('fs');

exports.createGreeting = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);

        const newGreeting = new Greeting({
            imageUrl: result.secure_url,
            message: req.body.message,
            frame: req.body.frame,
            uniqueId: uuidv4(), // unique id banane wala
        });

        const savedGreeting = await newGreeting.save();
        console.log('Greeting created:', savedGreeting); 
        fs.unlink(req.file.path, (err) => { //save space by deleting
            if (err) {
                console.error('Failed to delete local file:', err);
            } else {
                console.log('Local file deleted successfully.');
            }
        });

        res.status(201).json({
            uniqueId: savedGreeting.uniqueId,
            url: `${req.protocol}://${req.get('host')}/greeting/${savedGreeting.uniqueId}`
        });
    } catch (error) {
        console.error('Error creating greeting:', error);
        res.status(500).send('Server error');
    }
};

exports.getGreeting = async (req, res) => {
    try {
        const greeting = await Greeting.findOne({ uniqueId: req.params.uniqueId });

        if (!greeting) {
            return res.status(404).send('Greeting not found');
        }

        res.render('greetingDisplay', { greeting });
    } catch (error) {
        console.error('Error fetching greeting:', error);
        res.status(500).send('Server error');
    }
};
