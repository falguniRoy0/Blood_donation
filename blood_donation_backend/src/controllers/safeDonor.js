const safeDonorService = require('../services/safeDonor');

class safeDonorController {
  findAndCountAll(req, res, next) {
    return safeDonorService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return safeDonorService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return safeDonorService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await safeDonorService.update(id, payload);
    return 'safeDonor updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await safeDonorService.delete(id);
    return 'safeDonor deleted successfully';
  }
}

module.exports = new safeDonorController();
