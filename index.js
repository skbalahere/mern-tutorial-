const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/index');

const app = express(); 
const PORT = 3001; 
const uri = "mongodb+srv://skbalahere:Kayal%4081308@cluster0.hkoxv.mongodb.net/advanced?retryWrites=true&w=majority";

app.use(cors())
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use('/api', router); 

mongoose.connect(uri, { useNewUrlParser: true}); 
mongoose.connection.once('open', function() { 
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose Connection Error : ' + error);
});

app.listen(PORT, function() { 
  console.log(`Server listening on port ${PORT}.`);
});