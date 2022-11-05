const status = require('http-status');
const User = require('../models').User;
const { NotFound } = require('../responses/errors');

class UserService {
   show() {
    return User.findAndCountAll({
      include: [{ association: 'roles'}, { association: 'bloodGroups'}, 
      { association: 'tods'}, { association: 'donorQueries'}, { association: 'bloodIssued' }]
    });
  }

  findByID(id) {
    return User.findByPk(id, {
      include: [{ association: 'tods' }, { association: 'bloodGroups'}, { association: 'donorQueries'}]
    });
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
      include: [{ association: 'tods'}, { association: 'bloodGroups'}, { association: 'donorQueries'}],
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

  countDonor(usertype) {
    return User.findAndCountAll({
      where: {
        usertype:"Donor"
      },
    });
  }

  countRecipient(usertype) {
    return User.findAndCountAll({
      where: {
        usertype:"Recipient"
      },
    });
  }

  // countUser(id) {
  //   return User.findAndCountAll(id);
  // }

}

module.exports = new UserService();
