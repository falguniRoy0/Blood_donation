const router = require('express').Router();
const userController = require('../controllers/user');
const wrapper = require('../responses/wrapper');

router.get('/Donor', wrapper(userController.findDonor));
router.get('/Recipient', wrapper(userController.findRecipient));
router.get('/Volunteer', wrapper(userController.findVolunteer));
router.get('/Moderator', wrapper(userController.findModerator));
router.get('/', wrapper(userController.findAll));
// router.post('/', wrapper(userController.create));
router.get('/:id', wrapper(userController.findById));
router.put('/:id', wrapper(userController.update));
router.delete('/:id', wrapper(userController.delete));
// router.post('/login', wrapper(userController.login));


module.exports = router;
