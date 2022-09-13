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

  // async create(payload) {
  //   let salt = bcrypt.genSaltSync(10);
  //   let hash = bcrypt.hashSync(payload.password, salt);
  //   payload.password = hash;
  //   const newUser = await User.create(payload);
  //   delete newUser.dataValues.password;
  //   return newUser;
  // }

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

  // async login(payload){
  //   const user = await User.findOne({
  //     where: {
  //       email:payload.email
  //     }
  //   });
  //   if ( !user ) {
  //     return null;
  //   }
  //   let isValid = bcrypt.compareSync(payload.password, user.password);
  //   if ( !isValid ) {
  //     return null;
  //   }
    
  //   return user;
  // }
}

module.exports = new UserService();
