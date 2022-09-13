require('dotenv').config();
const status = require('http-status');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { NotFound, BadRequestErr, Unauthorized } = require('../responses/errors');
const User = require('../models').User;

class UserService {
    async create(payload) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(payload.password, salt);
        payload.password = hash;
        const { email } = payload;
        const isEmailExit = await User.findOne({
            where: {
                email
            }
        });
        if (isEmailExit) {
            throw new BadRequestErr('Email already taken.');
        }
        return User.create(payload);
    }

    async login(payload) {
        const { email, password } = payload;
        const isEmailExit = await User.findOne({
            where: {
                email
            },
            include: { association: 'roles' }
        });
        // console.log(isEmailExit)
        if (!isEmailExit) {
            return {
               message: status['404_MESSAGE']
            };
        }
        const compare = await bcrypt.compare(password, isEmailExit.password);
            // console.log(compare);

        if (!compare) {
            // authentication failed
        //  throw new Unauthorized(status['401_MESSAGE']);
        return {
            message: status['401_MESSAGE']
         };
        } 
        // const { id } = isEmailExit;

        const token = jwt.sign(
            JSON.parse(JSON.stringify(isEmailExit)),
        process.env.APP_SECRET
        );
        return { token };
    }
}

module.exports = new UserService();