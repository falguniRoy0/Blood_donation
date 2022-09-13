const router = require('express').Router();
const bloodissuedController = require('../controllers/bloodissued');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(bloodissuedController.findAll));
router.post('/', wrapper(bloodissuedController.create));
router.get('/:id', wrapper(bloodissuedController.findById));
router.put('/:id', wrapper(bloodissuedController.update));
router.delete('/:id', wrapper(bloodissuedController.delete));

module.exports = router;
