const router = require('express').Router();
const articleController = require('../../controllers/articleController');

//* Match with '/api/articles/'
router
  .route('/')
  .get(articleController.findAll)
  .post(articleController.create);

//* Match with '/api/books/:id'
router
  .route('/:id')
  .get(articleController.findById)
  .delete(articleController.remove);

module.exports = router;
