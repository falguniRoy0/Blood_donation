const status = require('http-status');
const Bloodgroup = require('../models').Bloodgroup;
const { NotFound } = require('../responses/errors');

class BloodgroupService {
  show() {
    return Bloodgroup.findAll();
  }

  findByID(id) {
    return Bloodgroup.findByPk(id);
  }

  create(payload) {
    return Bloodgroup.create(payload);
  }

  async update(id, payload) {
    const bloodgroup = await Bloodgroup.findByPk(id);
    if (!bloodgroup) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return bloodgroup.update(payload);
  }

  async delete(id) {
    const bloodgroup = await Bloodgroup.findByPk(id);
    if (!bloodgroup) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return bloodgroup.destroy();
  }
}

module.exports = new BloodgroupService();
