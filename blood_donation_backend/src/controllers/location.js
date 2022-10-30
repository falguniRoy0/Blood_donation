const locationService = require('../services/location');

class locationController {
  findAll(req, res, next) {
    return locationService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return locationService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return locationService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await locationService.update(id, payload);
    return 'location updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await locationService.delete(id);
    return 'location deleted successfully';
  }
}

module.exports = new locationController();
