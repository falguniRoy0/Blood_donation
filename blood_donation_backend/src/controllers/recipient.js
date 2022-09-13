const recipientService = require('../services/recipient');

class recipientController {
  findAll(req, res, next) {
    return recipientService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return recipientService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return recipientService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await recipientService.update(id, payload);
    return 'Recipient updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await recipientService.delete(id);
    return 'Recipient deleted successfully';
  }
}

module.exports = new recipientController();
