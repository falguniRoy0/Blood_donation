const donorService = require('../services/donor');

class donorController {
  findAll(req, res, next) {
    return donorService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return donorService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return donorService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await donorService.update(id, payload);
    return 'Donor updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await donorService.delete(id);
    return 'Donor deleted successfully';
  }
}

module.exports = new donorController();
