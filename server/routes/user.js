const router = require('express').Router();
const User = require('./../models/user');
const bcrypt = require('bcrypt');
const fetch = require('node-fetch');

const assignLocation = (longitude, latitude, session) => {
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude}%2C%20${latitude}.json?`
    + process.env.REVERSE_GEOCODING_KEY)
    .then(res => res.json())
    .then(res => {
      const ranges = res.features;
      for (let i = 0; i < ranges.length; i++) {
        const checkRange = ranges[i].id.split('.');
        if (checkRange[0] === 'place') {
          let community = ranges[i].place_name.split(', ')[0]
          session.community = community;
        }
      }
    })
    .catch(console.error);
}

router.post('/register', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      longitude,
      latitude
    } = req.body;

    let checkIfUserExist = await User.findOne({ email: email });
    if (checkIfUserExist) return res.json({ 'error': 'Email already in use' });
    if (password < 8) return res.json({ 'error': 'Password is not long enough' });

    let user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user = await user.save();

    req.session.userID = user._id;
    res.json("Registration successful");
    res.end(assignLocation(longitude, latitude, req.session));
  } catch (error) {
    res.status(500).json('error: ' + error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const {
      email,
      password,
      longitude,
      latitude
    } = req.body;
    let user = await User.findOne({ email: email });

    if (!user)
      return res.json({ error: 'Email or Password was incorrect' });

    //https://coderrocketfuel.com/article/using-bcrypt-to-hash-and-check-passwords-in-node-js
    bcrypt.compare(password, user.password, function (err, isMatch) {
      if (err) throw err;
      if (!isMatch) return res.json({ error: 'Email or Password was incorrect' });
      req.session.userID = user._id;
      res.json('Login successful');
      res.end(assignLocation(longitude, latitude, req.session));
    });

  } catch (error) {
    res.status(500).json('Error:  ' + error);
  }
});

router.get('/profile', async (req, res) => {
  try {
    const user = await User.findById(req.session.userID);
    res.json(user);
  } catch (error) {
    res.status(500).json('Error:  ' + error);
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