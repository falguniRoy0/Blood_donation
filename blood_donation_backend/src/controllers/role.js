const roleService = require('../services/role');

class roleController {
  findAll(req, res, next) {
    return roleService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return roleService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return roleService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await roleService.update(id, payload);
    return 'Role updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await roleService.delete(id);
    return 'Role deleted successfully';
  }

  async addUserRole(req, res, next) {
    const roleId = req.params.roleId;
    const userId = req.params.userId;
    const role = await roleService.addUserRole(roleId, userId);
    console.log(role);
    return res.send({roleId, userId});
  }
}

module.exports = new roleController();
