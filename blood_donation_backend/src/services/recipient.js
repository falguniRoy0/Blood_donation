const status = require('http-status');
const Recipient = require('../models').Recipient;
const { NotFound } = require('../responses/errors');

class RecipientService {
  show() {
    return Recipient.findAll({
      include: [{ association: 'blood_request' }]
    });
  }

  findByID(id) {
    return Recipient.findByPk(id);
  }

  create(payload) {
    return Recipient.create(payload);
  }

  async update(id, payload) {
    const recipient = await Recipient.findByPk(id);
    if (!recipient) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return recipient.update(payload);
  }

  async delete(id) {
    const recipient = await Recipient.findByPk(id);
    if (!recipient) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return recipient.destroy();
  }
}

module.exports = new RecipientService();
