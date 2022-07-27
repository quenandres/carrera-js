import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'santiago',
    role: 'seller'
  },
  {
    username: 'zulema',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log('rta');
console.log(rta);
