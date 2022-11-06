const status = require('http-status');
const SafeDonor = require('../models').SafeDonor;
const { NotFound } = require('../responses/errors');

class SafeDonorService {
  show() {
    return SafeDonor.findAndCountAll();
  }

  findByID(id) {
    return SafeDonor.findByPk(id);
  }

  create(payload) {
    return SafeDonor.create(payload);
  }

  async update(id, payload) {
    const safeDonor = await SafeDonor.findByPk(id);
    if (!safeDonor) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return safeDonor.update(payload);
  }

  async delete(id) {
    const safeDonor = await SafeDonor.findByPk(id);
    if (!safeDonor) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return safeDonor.destroy();
  }
}

module.exports = new SafeDonorService();
