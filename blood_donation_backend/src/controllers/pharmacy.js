const pharmacyService = require('../services/pharmacy');

class pharmacyController {
  findAndCountAll(req, res, next) {
    return pharmacyService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return pharmacyService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return pharmacyService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await pharmacyService.update(id, payload);
    return 'pharmacy updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await pharmacyService.delete(id);
    return 'pharmacy deleted successfully';
  }
}

module.exports = new pharmacyController();
