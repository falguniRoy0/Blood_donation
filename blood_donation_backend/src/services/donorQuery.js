const status = require('http-status');
const donorQuery = require('../models').donorQuery;
const { NotFound } = require('../responses/errors');

class donorQueryService {
  show() {
    return donorQuery.findAll();
  }

  findByID(id) {
    return donorQuery.findByPk(id);
  }

  create(payload) {
    return donorQuery.create(payload);
  }

  async update(id, payload) {
    const donorquery = await donorQuery.findByPk(id);
    if (!donorquery) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return donorquery.update(payload);
  }

  async delete(id) {
    const donorquery = await donorQuery.findByPk(id);
    if (!donorquery) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return donorquery.destroy();
  }
}

module.exports = new donorQueryService();
