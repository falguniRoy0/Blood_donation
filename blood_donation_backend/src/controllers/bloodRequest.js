const bloodRequestService = require('../services/bloodRequest');

class bloodRequestController {
  findAll(req, res, next) {
    return bloodRequestService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return bloodRequestService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return bloodRequestService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await bloodRequestService.update(id, payload);
    return 'BloodRequest updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await bloodRequestService.delete(id);
    return 'BloodRequest deleted successfully';
  }
}

module.exports = new bloodRequestController();
