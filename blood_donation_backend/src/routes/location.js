const router = require('express').Router();
const locationController = require('../controllers/location');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(locationController.findAll));
router.post('/', wrapper(locationController.create));
router.get('/:id', wrapper(locationController.findById));
router.put('/:id', wrapper(locationController.update));
router.delete('/:id', wrapper(locationController.delete));

module.exports = router;
