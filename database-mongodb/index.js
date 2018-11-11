const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://jessicahasal:Taylor10!@cluster0-ym3od.mongodb.net/description?retryWrites=true';

const db = mongoose.connect(mongoUri)

module.exports = db
