const userService = require('../services/user');
const jwt = require('jsonwebtoken');

class UserController {
  findAll(req, res, next) {
    return userService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return userService.findByID(id);
  }

  // async create(req, res, next) {
  //   let payload = req.body;
  //   const user = await userService.create(payload);
  //   return res.send({
  //     user,
  //   });
  // }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await userService.update(id, payload);
    return 'User updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await userService.delete(id);
    return 'User deleted successfully';
  }

  // async login( req, res, next){
  //   const payload = req.body;
  //   const user = await userService.login(payload);
  //   if ( !user ) {
  //     return res.send({
  //       message: 'invalid credentials'
  //     });
  //   }

  //   let token = jwt.sign(
  //     {
  //       id: user.id,
  //       name: user.name,
  //       email: user.email,
  //       city: user.city
  //     },
  //     'bloodDonation',
  //     { expiresIn: '2h' }
  //   );
  //   res.header('x-auth-token', token);
  //   return res.send({
  //     token
  //   });
  // }
}

module.exports = new UserController();
