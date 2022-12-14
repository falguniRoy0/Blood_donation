const router = require('express').Router();
const bloodRequestController = require('../controllers/bloodRequest');
const wrapper = require('../responses/wrapper');

// router.get('/:id', wrapper(bloodRequestController.findReqRes));
router.get('/', wrapper(bloodRequestController.findAndCountAll));
router.post('/', wrapper(bloodRequestController.create));
router.get('/:id', wrapper(bloodRequestController.findById));
router.put('/:id', wrapper(bloodRequestController.update));
router.delete('/:id', wrapper(bloodRequestController.delete));

module.exports = router;
