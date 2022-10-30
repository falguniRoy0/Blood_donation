const status = require('http-status');
const Location = require('../models').Location;
const { NotFound } = require('../responses/errors');

class LocationService {
  show() {
    return Location.findAll();
  }

  findByID(id) {
    return Location.findByPk(id);
  }

  create(payload) {
    return Location.create(payload);
  }

  async update(id, payload) {
    const location = await Location.findByPk(id);
    if (!location) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return location.update(payload);
  }

  async delete(id) {
    const location = await Location.findByPk(id);
    if (!location) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return location.destroy();
  }
}

module.exports = new LocationService();
