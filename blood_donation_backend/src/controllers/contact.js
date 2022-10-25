const contactService = require('../services/contact');

class contactController {
  findAll(req, res, next) {
    return contactService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return contactService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return contactService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await contactService.update(id, payload);
    return 'contact updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await bloodRequestService.delete(id);
    return 'contact deleted successfully';
  }
}

module.exports = new contactController();
