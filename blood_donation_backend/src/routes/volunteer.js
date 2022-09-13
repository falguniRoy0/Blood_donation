const router = require('express').Router();
const volunteerController = require('../controllers/volunteer');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(volunteerController.findAll));
router.post('/', wrapper(volunteerController.create));
router.get('/:id', wrapper(volunteerController.findById));
router.put('/:id', wrapper(volunteerController.update));
router.delete('/:id', wrapper(volunteerController.delete));

module.exports = router;
