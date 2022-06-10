const { models } = require('./../libs/sequelize.js');

class UserService {

  constructor() {}

  create(data) {
    return data;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  findOne(id) {
    return id;
  }

  delete(id) {
    return id;
  }

  update(id, changes) {

    return changes;
  }


}

module.exports = UserService;
