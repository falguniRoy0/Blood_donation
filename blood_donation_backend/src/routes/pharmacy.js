const router = require('express').Router();
const pharmacyController = require('../controllers/pharmacy');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(pharmacyController.findAll));
router.post('/', wrapper(pharmacyController.create));
router.get('/:id', wrapper(pharmacyController.findById));
router.put('/:id', wrapper(pharmacyController.update));
router.delete('/:id', wrapper(pharmacyController.delete));

module.exports = router;
