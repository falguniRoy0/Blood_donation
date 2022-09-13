const status = require('http-status');
const Bloodcollection = require('../models').Bloodcollection;
const { NotFound } = require('../responses/errors');

class BloodcollectionService {
  show() {
    return Bloodcollection.findAll();
  }

  findByID(id) {
    return Bloodcollection.findByPk(id);
  }

  create(payload) {
    return Bloodcollection.create(payload);
  }

  async update(id, payload) {
    const bloodcollection = await Bloodcollection.findByPk(id);
    if (!bloodcollection) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return bloodcollection.update(payload);
  }

  async delete(id) {
    const bloodcollection = await Bloodcollection.findByPk(id);
    if (!bloodcollection) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return bloodcollection.destroy();
  }
}

module.exports = new BloodcollectionService();
