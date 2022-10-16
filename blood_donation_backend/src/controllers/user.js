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

  // findDonor(req, res, next) {
  //   const usertype = req.params.usertype;
  //   return userService.findDonor(usertype);
  // }

  // findRecipient(req, res, next) {
  //   const usertype = req.params.usertype;
  //   return userService.findRecipient(usertype);
  // }

  // findVolunteer(req, res, next) {
  //   const usertype = req.params.usertype;
  //   return userService.findVolunteer(usertype);
  // }

  // findModerator(req, res, next) {
  //   const usertype = req.params.usertype;
  //   return userService.findModerator(usertype);
  // }
}

module.exports = new UserController();
