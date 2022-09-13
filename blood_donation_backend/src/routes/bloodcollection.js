const router = require('express').Router();
const bloodcollectonController = require('../controllers/bloodcollection');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(bloodcollectonController.findAll));
router.post('/', wrapper(bloodcollectonController.create));
router.get('/:id', wrapper(bloodcollectonController.findById));
router.put('/:id', wrapper(bloodcollectonController.update));
router.delete('/:id', wrapper(bloodcollectonController.delete));

module.exports = router;
