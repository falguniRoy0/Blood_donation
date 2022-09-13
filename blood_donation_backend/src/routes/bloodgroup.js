const router = require('express').Router();
const bloodgroupController = require('../controllers/bloodgroup');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(bloodgroupController.findAll));
router.post('/', wrapper(bloodgroupController.create));
router.get('/:id', wrapper(bloodgroupController.findById));
router.put('/:id', wrapper(bloodgroupController.update));
router.delete('/:id', wrapper(bloodgroupController.delete));

module.exports = router;
