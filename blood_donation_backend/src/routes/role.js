const router = require('express').Router();
const roleController = require('../controllers/role');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(roleController.findAll));
router.post('/', wrapper(roleController.create));
router.get('/:id', wrapper(roleController.findById));
router.put('/:id', wrapper(roleController.update));
router.delete('/:id', wrapper(roleController.delete));
router.post('/:roleId/users/:userId', wrapper(roleController.addUserRole));

module.exports = router;
