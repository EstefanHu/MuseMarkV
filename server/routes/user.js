const router = require('express').Router();
const User = require('./../models/user');

router.post('/create', async (req, res) => {
  try {
    let checkIfUserExist = await User.findOne({ email: req.body.email });
    if (checkIfUserExist) res.json({'Error': 'User Already exists'});
    

    let user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user = await user.save();
    res.json({ id: userId });

  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

router.post('/login', async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    const warning = 'Email or Password was incorrect';
    if (!user) res.send(warning);
    if (user.password != req.password) res.send(warning);
    res.json({user: user});
  } catch(error) {
    res.type('text').status(500).send('Error:  ' + error);
  }
});

router.get('/:id').get(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch(error) {
    res.type('text').status(500).send('Error:  ' + error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user = await user.save();
    res.send('Successfully saved user as: ' + user); //TODO: Dev only
  } catch(error) {
    res.type('text').status(500).send('Error:  ' + error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send('success');
  } catch(error) {
    res.type('text').status(500).send('Error:  ' + error);
  }
});

module.exports = router;