const faker   = require('faker');

class CategoriesService {

  constructor() {
    this.categories = [];
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newProduct);
    return newProduct;
  }

  find() {
    return this.categories;
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
