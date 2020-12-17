const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_HOT || 'mongodb://localhost/dbpaineis');
mongoose.Promise = global.Promise;


module.exports = mongoose;