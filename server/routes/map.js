
const router = require('express').Router();

router.route('/api').get((req, res) => {
  try {
    res.json(process.env.MAPBOX_ACCESS_TOKEN);
  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

module.exports = router;