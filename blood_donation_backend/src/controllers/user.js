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

  findByUserType(req, res, next) {
    const usertype = req.params.usertype;
    return userService.findByUserType(usertype);
  }
}

module.exports = new UserController();
