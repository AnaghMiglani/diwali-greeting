const mongoose = require('mongoose');

const greetingSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    message: { type: String, required: true },
    frame: { type: String, required: true },
    uniqueId: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Greeting', greetingSchema);
