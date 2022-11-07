const status = require('http-status');
const Bloodrequest = require('../models').Bloodrequest;
const { NotFound } = require('../responses/errors');

class BloodrequestService {
  show() {
    return Bloodrequest.findAndCountAll({
      include: [{ association: 'Donor' }, { association: 'Recipient' }]
    });
  }

  findByID(id) {
    return Bloodrequest.findByPk(id, {
      include: [{ association: 'Donor' }, { association: 'Recipient' }]
    });
  }

  create(bloodRequest) {
    return Bloodrequest.create(bloodRequest, {
      include: [{ association: 'Donor' }, { association: 'Recipient' }]
    });
  }

  async update(id, payload) {
    const bloodrequest = await Bloodrequest.findByPk(id);
    if (!bloodrequest) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return bloodrequest.update(payload);
  }

  async delete(id) {
    const bloodrequest = await Bloodrequest.findByPk(id);
    if (!bloodrequest) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return bloodrequest.destroy();
  }
}

module.exports = new BloodrequestService();
