import format from 'date-fns/format/index.js';
import { faker } from '@faker-js/faker/locale/id_ID'

faker.locale = 'id_ID';

const i = 0;

const employee = {
    emp_id: i,
    emp_name: faker.name.fullName(),
    emp_nik: faker.phone.number('################'),
    emp_address: faker.address.streetAddress(),
    emp_phone_num: faker.phone.number('+628#########'),
    emp_division: faker.helpers.arrayElement([ 
        'Magang',
        'Karyawan Junior',
        'Karyawan Senior',
        'Manager',
      ]),
}

const purchase_transaction = {
  purchase_t_id: i,
  emp_id: faker.datatype.number({ min: 1, max: 100 }), 
  sup_id: faker.datatype.number({ min: 1, max: 100 }), 
  purchase_t_time: format(faker.date.past(1), "yyyy-MM-dd'T'HH:mm:ss"),
  purchase_total_price: faker.commerce.price(1000, 100000), 
}

const supplier = {
  sup_id: i,
  sup_name: faker.name.fullName(),
  sup_phone_num: faker.phone.number('+628#########'),
  sup_address: faker.address.streetAddress(),
}

const sales_transaction = {
  sales_t_id: i,
  emp_id: faker.datatype.number({ min: 1, max: 100 }), 
  cust_id: faker.datatype.number({ min: 1, max: 100 }), 
  sales_t_time: format(faker.date.recent(1), "yyyy-MM-dd'T'HH:mm:ss"),
  sales_total_price: faker.commerce.price(1000, 100000),
}

const item = {
  item_id: i,
  ic_id: faker.datatype.number({ min: 1, max: 4 }), 
  item_name: faker.commerce.product() , //array of element instead?
  item_sale_price: faker.commerce.price(), //need rules to harga beli <
  item_purchase_price: faker.commerce.price(), //need rules to harga jual >
  item_weight: faker.datatype.number(10), 
  item_stock: faker.datatype.number(1000),
  discount: faker.datatype.number({ max: 100 }), 
}

const customer = { 
  cust_id: i,
  cust_name: faker.name.fullName(),
  cust_phone_num: faker.phone.number('+628#########'),
  cust_email: faker.internet.email(),
  cust_registration_date: format(faker.date.past(1), 'yyyy-MM-dd'),
  cust_address: faker.address.streetAddress(),
}

const item_category = {
  ic_id: i,
  ic_name: faker.helpers.arrayElement([ 
    'Alat Menulis',
    'Alat Menghapus',
    'Peralatan Pendukung',
    'Peralatan Kantor',
  ]),
}