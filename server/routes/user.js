const router = require('express').Router();
const User = require('./../models/user');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  try {
    let checkIfUserExist = await User.findOne({ email: req.body.email });
    if (checkIfUserExist) return res.json({ 'error': 'Email already in use' });
    if (req.body.password < 8) return res.json({ 'error': 'Password is not long enough' });

    let user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user = await user.save();

    req.session.userId = user._id;

    res.json("Registration successful");

  } catch (error) {
    res.status(500).json('error: ' + error);
  }
});

router.post('/login', async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.json('Email or Password was incorrect');

    //https://coderrocketfuel.com/article/using-bcrypt-to-hash-and-check-passwords-in-node-js
    bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
      if (err) throw err;
      if (!isMatch) return res.json({error: 'Email of Password was incorrect'});
      req.session.userId = user._id;
      res.json("Login successful");
    });
  } catch (error) {
    res.status(500).json('Error:  ' + error);
  }
});

router.get('/:id').get(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.type('text').status(500).send('Error:  ' + error);
  }
});

router.post('/update/:id', async (req, res) => {
  try {
    let checkIfUserExist = await User.findOne({ email: req.body.email });
    if (checkIfUserExist) res.json({ 'Error': 'User Already exists' });

    let user = await User.findById(req.params.id);
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user = await user.save();
    res.send('Successfully updated User');
  } catch (error) {
    res.type('text').status(500).send('Error:  ' + error);
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send('Deleted User');
  } catch (error) {
    res.type('text').status(500).send('Error:  ' + error);
  }
});

router.get('/logout', (req, res) => {
  try {
    req.session.destroy(err => {
      if (err) throw err
    });
  } catch (error) {
    res.type('text').status(500).send('Error:  ' + error);
  }
});

module.exports = router;