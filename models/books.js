const mongoose = require('mongoose');

const booksschema = new mongoose.Schema({ 
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  description: {
    type: String,
    required: [true, "Description can't be blank"]
  }
});

module.exports = mongoose.model('books1', booksschema); 

