const router = require('express').Router();
const userroleController = require('../controllers/userrole');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(userroleController.findAll));
router.post('/', wrapper(userroleController.create));
router.get('/:id', wrapper(userroleController.findById));
router.put('/:id', wrapper(userroleController.update));
router.delete('/:id', wrapper(userroleController.delete));

module.exports = router;
