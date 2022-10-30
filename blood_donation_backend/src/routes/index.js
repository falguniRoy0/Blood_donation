const router = require('express').Router();

// const authenticate = require('../middleware/authenticate');
const authRouter = require('./auth');

const userRouter = require('./user');
const roleRouter = require('./role');
const userGroupRouter = require('./usergroup');
const bloodIssuedRouter = require('./bloodissued');
const bloodCollectionRouter = require('./bloodcollection');
const bloodRequestRouter = require('./bloodrequest');
const bloodGroupRouter = require('./bloodgroup');
const volunteerRouter = require('./volunteer');
const recipientRouter = require('./recipient');
const donorRouter = require('./donor');
const ToDRouter = require('./ToD');
const donorQueryRouter = require('./donorQuery');
const contactRouter = require('./contact');
const safeDonorRouter = require('./safeDonor');
const locationRouter = require('./location');
const pharmacyRouter = require('./pharmacy');

const { route } = require('./user');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/roles', roleRouter);
router.use('/user-groups', userGroupRouter);
router.use('/blood-issues', bloodIssuedRouter);
router.use('/blood-collections', bloodCollectionRouter);
router.use('/blood-requests', bloodRequestRouter);
router.use('/blood-groups', bloodGroupRouter);
router.use('/volunteers', volunteerRouter);
router.use('/recipients', recipientRouter);
router.use('/donors', donorRouter);
router.use('/ToDs', ToDRouter );
router.use('/donorQueries', donorQueryRouter);
router.use('/contacts', contactRouter);
router.use('/safeDonors', safeDonorRouter);
router.use('/locations', locationRouter);
router.use('/pharmacies', pharmacyRouter);

module.exports = router;
