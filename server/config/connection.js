const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gamers-bay', {
    
});

module.exports = mongoose.connection;