const mongoose = require('mongoose');

module.exports = function connectToDB(){
    mongoose.connect('mongodb+srv://n33r4j95:Q9WmrHkZaSboakWl@cluster0.aflukfl.mongodb.net/vfsapi')
  .then(() => console.log('Connected!'));
}