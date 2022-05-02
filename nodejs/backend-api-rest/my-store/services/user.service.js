const faker   = require('faker');
const getConnection = require('./../libs/postgres');

class CategoriesService {

  constructor() {
    this.categories = [];
  }

  create(data) {
    return data;
  }

  async find() {
    const client = await getConnection();
    const rta    = await client.query('SELECT * FROM tasks');
    return rta.rows;
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

module.exports = CategoriesService;
