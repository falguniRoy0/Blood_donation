const status = require('http-status');
const User = require('../models').User;
const { NotFound } = require('../responses/errors');

class UserService {
   show() {
    return User.findAll({
      include: [{ association: 'roles'}, { association: 'tods'}, { association: 'donor'}, { association: 'reciever' },{ association: 'bloodCollection' }, { association: 'bloodRequest' }, { association: 'bloodIssued' }]
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

//  findDonor(usertype) {
//     return User.findAll({
//       where: {
//         usertype:"Donor"
//       },
//     });
//   }

//   findRecipient(usertype) {
//     return User.findAll({
//       where: {
//         usertype:"Recipient"
//       },
//     });
//   }

//   findVolunteer(usertype) {
//     return User.findAll({
//       where: {
//         usertype:"Volunteer"
//       },
//     });
//   }
}

module.exports = new UserService();
