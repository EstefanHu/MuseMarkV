
const router = require('express').Router();

router.route('/register').get((req, res) => {
  try {
    console.log(req.body);
    res.json('Noice');
  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

router.route('/login').get((req, res) => {
  try {
    console.log(req.body);
    res.json('Logged i');
  } catch(error) {
    res.type('text').status(500).send('Error:  ' + error);
  }
});

module.exports = router;