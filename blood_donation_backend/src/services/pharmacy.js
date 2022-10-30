const status = require('http-status');
const Pharmacy = require('../models').Pharmacy;
const { NotFound } = require('../responses/errors');

class PharmacyService {
  show() {
    return Pharmacy.findAll();
  }

  findByID(id) {
    return Pharmacy.findByPk(id);
  }

  create(payload) {
    return Pharmacy.create(payload);
  }

  async update(id, payload) {
    const pharmacy = await Pharmacy.findByPk(id);
    if (!pharmacy) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return pharmacy.update(payload);
  }

  async delete(id) {
    const pharmacy = await Pharmacy.findByPk(id);
    if (!pharmacy) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return pharmacy.destroy();
  }
}

module.exports = new PharmacyService();
