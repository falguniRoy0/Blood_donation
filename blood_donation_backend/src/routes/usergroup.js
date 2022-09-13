const router = require('express').Router();
const usergroupController = require('../controllers/usergroup');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(usergroupController.findAll));
router.post('/', wrapper(usergroupController.create));
router.get('/:id', wrapper(usergroupController.findById));
router.put('/:id', wrapper(usergroupController.update));
router.delete('/:id', wrapper(usergroupController.delete));

module.exports = router;
