const faker   = require('faker');

const pool = require('./../libs/postgres.pool');

class CategoriesService {

  constructor() {
    this.categories = [];
    this.pool = pool;
    this.pool = pool.on('error', (err) => console.log(err));
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newProduct);
    return newProduct;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const rta = await pool.query(query);

    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(rta);
      }, 4500);
    })
  }

  findOne(id) {
    return this.categories.find(item => item.id === id);
  }

  delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if( index === -1 ) {
      throw new Error('Category not found');
    }
    this.categories.splice(index, 1);
    return {id}
  }

  update(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if( index === -1 ) {
      throw new Error('Category not found');
    }

    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    };
    return this.categories[index];
  }


}

module.exports = CategoriesService;
