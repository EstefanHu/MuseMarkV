const router = require('express').Router();
const Story = require('./../models/story');

router.post('/create', async (req, res) => {
  try {

  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

router.get('/library/:id', async (req, res) => {
  try {
    let stories = await Story
                          .find({ authorId: req.params.id })
                          .sort({ created});
    res.json(stories);
  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    let story = await Story.findById(req.params.id);
    res.json(story);
  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    let story = await Story.findById(req.params.id);
    story.title = req.body.title;
    // TODO: Override story

    story = await story.save();
    res.send('Successfully saved story as: ' + story);;
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