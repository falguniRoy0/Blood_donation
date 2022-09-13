const router = require('express').Router();
const donorController = require('../controllers/donor');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(donorController.findAll));
router.post('/', wrapper(donorController.create));
router.get('/:id', wrapper(donorController.findById));
router.put('/:id', wrapper(donorController.update));
router.delete('/:id', wrapper(donorController.delete));

module.exports = router;
