const router = require('express').Router();
const userController = require('../controllers/auth');
const wrapper = require('../responses/wrapper');

router.post('/login', wrapper(userController.login));
router.post('/', wrapper(userController.create));


// router.post('/', async (req, res, next) => {
//     let payload = req.body;
//     const user = await userService.create(payload);
//     return res.send({
//       user,
//     });
//   }
// );

// router.post('/login', async ( req, res, next) => {
//     const payload = req.body;
//     const user = await userService.login(payload);
//     if ( !user ) {
//       return res.send({
//         message: 'invalid credentials'
//       });
//     }

//     let token = jwt.sign(
//       {
//         id: user.id,
//         name: user.name,
//         email: user.email,
//         city: user.city
//       },
//       'bloodDonation',
//       { expiresIn: '2h' }
//     );
//     res.header('x-auth-token', token);
//     return res.send({
//       token
//     });
//   });


module.exports = router;
