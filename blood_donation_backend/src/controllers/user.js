const userService = require('../services/user');
const jwt = require('jsonwebtoken');

class UserController {
  findAndCountAll(req, res, next) {
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

  findDonor(req, res, next) {
    const usertype = req.params.usertype;
    return userService.findDonor(usertype);
  }

  findRecipient(req, res, next) {
    const usertype = req.params.usertype;
    return userService.findRecipient(usertype);
  }

  countDonor(req, res, next) {
    const usertype = req.params.usertype;
    return userService.countDonor(usertype);
  }

  countRecipient(req, res, next) {
    const usertype = req.params.usertype;
    return userService.countRecipient(usertype);
  }

  // countUser(req, res, next) {
  //   const id = req.params.id;
  //   return userService.countUser(usertype);
  // }
}

module.exports = new UserController();
