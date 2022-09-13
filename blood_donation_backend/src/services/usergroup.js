const status = require('http-status');
const Usergroup = require('../models').Usergroup;
const { NotFound } = require('../responses/errors');

class UsergroupService {
  show() {
    return Usergroup.findAll();
  }

  findByID(id) {
    return Usergroup.findByPk(id);
  }

  create(payload) {
    return Usergroup.create(payload);
  }

  async update(id, payload) {
    const usergroup = await Usergroup.findByPk(id);
    if (!usergroup) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return usergroup.update(payload);
  }

  async delete(id) {
    const usergroup = await Usergroup.findByPk(id);
    if (!usergroup) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return usergroup.destroy();
  }
}

module.exports = new UsergroupService();
