const status = require('http-status');
const contact = require('../models').contact;
const { NotFound } = require('../responses/errors');

class contactService {
  show() {
    return contact.findAll();
  }

  findByID(id) {
    return contact.findByPk(id);
  }

  create(payload) {
    return contact.create(payload);
  }

  async update(id, payload) {
    const Contact = await contact.findByPk(id);
    if (!Contact) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return Contact.update(payload);
  }

  async delete(id) {
    const Contact = await contact.findByPk(id);
    if (!Contact) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return Contact.destroy();
  }
}

module.exports = new contactService();
