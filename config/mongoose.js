const mongoose = require('mongoose');
const env = require('./environment');

mongoose.connect(`mongodb+srv://im_mayur:m1a2y3u4r5@cluster0.byv33tm.mongodb.net/?retryWrites=true&w=majority/${env.db}` , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to DataBase'));

db.once('open', function(){
    console.log("Successfully connected to Data Base");
});

module.exports = db;
