const userGroupService = require('../services/usergroup');

class userGroupController {
  findAll(req, res, next) {
    return userGroupService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return userGroupService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return userGroupService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await userGroupService.update(id, payload);
    return 'UserGroup updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await userGroupService.delete(id);
    return 'UserGroup deleted successfully';
  }
}

module.exports = new userGroupController();
