const router = require('express').Router();
const Story = require('./../models/story');

router.post('/create', async (req, res) => {
  try {
    let story;
      
    if (req.body.id !== undefined) {
      story = await Story.findByIdAndUpdate(
        { _id: req.body.id },
        {
          title: req.body.title,
          description: req.body.description,
          location: req.body.location,
          route: req.body.route,
          author: req.session.userID
        }
      );
    } else {
      story = new Story();
      story.title = req.body.title;
      story.description = req.body.description;
      story.genre = 'fiction';
      story.community = 'seattle';
      story.location = req.body.location;
      story.route = req.body.route;
      story.author = req.session.userID;
    }

    story = await story.save();

    res.json('Created story: ' + story);
  } catch (error) {
    res.status(500).json('Error: ' + error);
  }
});

router.get('/library', async (req, res) => {
  try {
    let stories = await Story
      .find({ author: req.session.userID })
      .sort({ createdAt: 'desc' });
    res.json(stories);
  } catch (error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    let story = await Story.findById(req.params.id);
    res.json(story);
  } catch (error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    await Story.findByIdAndDelete(req.params.id);
    res.send('Deleted Story');
  } catch (error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

module.exports = router;