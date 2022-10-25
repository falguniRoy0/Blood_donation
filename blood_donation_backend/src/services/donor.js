const status = require('http-status');
const Donor = require('../models').Donor;
const { NotFound } = require('../responses/errors');

class DonorService {
  show() {
    return Donor.findAll();
  }

  findByID(id) {
    return Donor.findByPk(id);
  }

  create(payload) {
    return Donor.create(payload);
  }

  async update(id, payload) {
    const donor = await Donor.findByPk(id);
    if (!donor) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return donor.update(payload);
  }

  async delete(id) {
    const donor = await Donor.findByPk(id);
    if (!donor) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return user.destroy();
  }
}

module.exports = new DonorService();
