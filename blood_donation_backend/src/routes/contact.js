const router = require('express').Router();
const contactController = require('../controllers/contact');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(contactController.findAndCountAll));
router.post('/', wrapper(contactController.create));
router.get('/:id', wrapper(contactController.findById));
router.put('/:id', wrapper(contactController.update));
router.delete('/:id', wrapper(contactController.delete));

module.exports = router;
