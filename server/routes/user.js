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

module.exports = router;