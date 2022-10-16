const status = require('http-status');
const Role = require('../models').Role;
const { NotFound } = require('../responses/errors');

class RoleService {
  show() {
    return Role.findAll();
  }

  findByID(id) {
    return Role.findByPk(id);
  }

  create(payload) {
    return Role.create(payload);
  }

  async update(id, payload) {
    const role = await Role.findByPk(id);
    if (!role) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return role.update(payload);
  }

  async delete(id) {
    const role = await Role.findByPk(id);
    if (!role) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return role.destroy();
  }

  async addUserRole(roleId, userId) {
    const role = await Role.findByPk(roleId);
    if (!role) {
      return null;
    }
    const roleAdded = await role.addUser(userId);
    return roleAdded;
  }
}

module.exports = new RoleService();
