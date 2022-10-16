const router = require('express').Router();
const ToDController = require('../controllers/ToD');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(ToDController.findAll));
router.post('/', wrapper(ToDController.create));
router.get('/:id', wrapper(ToDController.findById));
router.put('/:id', wrapper(ToDController.update));
router.delete('/:id', wrapper(ToDController.delete));


module.exports = router;
