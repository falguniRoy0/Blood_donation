const status = require('http-status');
const Volunteer = require('../models').Volunteer;
const { NotFound } = require('../responses/errors');

class VolunteerService {
  show() {
    return Volunteer.findAll();
  }

  findByID(id) {
    return Volunteer.findByPk(id);
  }

  create(payload) {
    return Volunteer.create(payload);
  }

  async update(id, payload) {
    const volunteer = await Volunteer.findByPk(id);
    if (!volunteer) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return volunteer.update(payload);
  }

  async delete(id) {
    const volunteer = await Volunteer.findByPk(id);
    if (!volunteer) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return volunteer.destroy();
  }
}

module.exports = new VolunteerService();
