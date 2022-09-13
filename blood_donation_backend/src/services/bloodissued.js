const status = require('http-status');
const Bloodissued = require('../models').Bloodissued;
const { NotFound } = require('../responses/errors');

class BloodissuedService {
  show() {
    return Bloodissued.findAll();
  }

  findByID(id) {
    return Bloodissued.findByPk(id);
  }

  create(payload) {
    return Bloodissued.create(payload);
  }

  async update(id, payload) {
    const bloodissued = await Bloodissued.findByPk(id);
    if (!bloodissued) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return bloodissued.update(payload);
  }

  async delete(id) {
    const bloodissued = await Bloodissued.findByPk(id);
    if (!bloodissued) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return bloodissued.destroy();
  }
}

module.exports = new BloodissuedService();
