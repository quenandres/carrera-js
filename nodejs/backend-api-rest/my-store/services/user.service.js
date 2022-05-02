const faker   = require('faker');
const pool    = require('./../libs/postgres.pool.js');

class CategoriesService {

  constructor() {
    this.categories = [];
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const rta    = await pool.query(query);
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
