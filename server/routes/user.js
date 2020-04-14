const router = require('express').Router();
const User = require('./../models/user');

router.get('/update/:id', async (req, res) => {
  try {
    const chosenUser = await User.findById(req.params.id);
    res.json(chosenUser);
  } catch(error) {    
    res.type('text').status(500).send('Error:  ' + error);
  }
});

router.post('/create', (req, res) => {
  try {
    console.log(req.body);
    res.json('Noice');
  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

router.post('/login', (req, res) => {
  try {
    console.log(req.body);
    res.json('Logged i');
  } catch(error) {
    res.type('text').status(500).send('Error:  ' + error);
  }
});

function saveUserInformation(path) {
  return async (req, res) => {
    let user = req.user;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
  
    try {
      user = await user.save();
      res.send('Success');
    } catch(error) {
      res.type('text').status(500).send('Error:  ' + error);
    }
  }
}


// Create User
// Get User
// Update User
// Log User In
// Delete User

module.exports = router;