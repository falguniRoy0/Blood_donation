const router = require('express').Router();
const recipientController = require('../controllers/recipient');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(recipientController.findAll));
router.post('/', wrapper(recipientController.create));
router.get('/:id', wrapper(recipientController.findById));
router.put('/:id', wrapper(recipientController.update));
router.delete('/:id', wrapper(recipientController.delete));

module.exports = router;
