const router = require('express').Router();
const Story = require('./../models/story');

router.post('/create', async (req, res) => {
  try {
    let story = new Story();
    story.title = req.body.title;
    story.description = req.body.description;
    story.location = req.body.location;
    story.route = req.body.route;
    story.authorId = req.body.authorId;
    story = await story.save();

    res.json('Created story: ' + story);
    console.log('created ' + story);
  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

router.get('/library/:id', async (req, res) => {
  try {
    let stories = await Story
                          .find({ authorId: req.params.id })
                          .sort({ createdAt: 'desc'});
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
    story.description = req.body.description;
    story.location = req.body.location;
    story.route = req.body.route;
    story.authorId = req.body.authorId;
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