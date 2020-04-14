const router = require('express').Router();
const Story = require('./../models/story');

router.post('/create', async (req, res) => {
  try {

  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

router.get('/:id', async (req, res) => {
  try {

  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

router.put('/:id', async (req, res) => {
  try {

  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Story.findByIdAndDelete(req.params.id);
    res.send('Deleted Story');
  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});



module.exports = router;