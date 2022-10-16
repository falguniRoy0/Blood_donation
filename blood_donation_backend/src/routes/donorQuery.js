const router = require('express').Router();
const donorQueryController = require('../controllers/donorQuery');
const wrapper = require('../responses/wrapper');

router.get('/', wrapper(donorQueryController.findAll));
router.post('/', wrapper(donorQueryController.create));
router.get('/:id', wrapper(donorQueryController.findById));
router.put('/:id', wrapper(donorQueryController.update));
router.delete('/:id', wrapper(donorQueryController.delete));

module.exports = router;
