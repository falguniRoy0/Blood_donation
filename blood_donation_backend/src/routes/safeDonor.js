const router = require('express').Router();
const safeDonorController = require('../controllers/safeDonor');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(safeDonorController.findAndCountAll));
router.post('/', wrapper(safeDonorController.create));
router.get('/:id', wrapper(safeDonorController.findById));
router.put('/:id', wrapper(safeDonorController.update));
router.delete('/:id', wrapper(safeDonorController.delete));

module.exports = router;
