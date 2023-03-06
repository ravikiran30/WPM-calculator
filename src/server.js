const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('./config/config.js')

const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());


app.post('/api/users', async (req, res) => {
  // Extract data from the request body
  const { name, email, password } = req.body;

  // Validate the data
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create a new user using the data
  const user = new User({ name, email, password });

  // Save the user to the database
  try {

    const us = await User.findOne({ email });
    if(!us){
    await user.save();
    res.json({ message: 'User created successfully' });
    }else{
      res.status(401).json({message:"user Exists"})
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      res.status(401).json({ message: 'Invalid email or password.' });
    } else {
      // Set a cookie to keep the user logged in
      res.cookie('user_id', user._id, { httpOnly: true });
      res.json({message: 'Logged in successfully.',name:user.name });
    
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

