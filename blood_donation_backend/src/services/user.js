const status = require('http-status');
const User = require('../models').User;
const { NotFound } = require('../responses/errors');

class UserService {
   show() {
    return User.findAll({
      include: [{ association: 'roles' }, { association: 'donor'}, { association: 'reciever' }, { association: 'volunteer' }, 
      { association: 'bloodCollection' }, { association: 'bloodRequest' }, { association: 'bloodIssued' }]
    });
  }

  findByID(id) {
    return User.findByPk(id);
  }

  async update(id, payload) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return user.update(payload);
  }

  async delete(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return user.destroy();
  }

 findDonor(usertype) {
    return User.findAll({
      where: {
        usertype:"Donor"
      },
    });
  }

  findRecipient(usertype) {
    return User.findAll({
      where: {
        usertype:"Recipient"
      },
    });
  }
}

module.exports = new UserService();
