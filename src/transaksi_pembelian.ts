import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import format from 'date-fns/format/index.js';
import * as fs from 'fs';

faker.locale = 'id_ID';

const tableName = 'purchase_transaction';

for (let i = 1; i <= 1000; i++) {
    console.log('🚀 ~ file: purchase_transaction.ts ~ line 9 ~ i', i);
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
        purchase_t_id: i,
        emp_id: faker.datatype.number({ min: 1, max: 100 }), 
        sup_id: faker.datatype.number({ min: 1, max: 100 }), 
        purchase_t_time: format(faker.date.past(1), "yyyy-MM-dd'T'HH:mm:ss"),
        purchase_total_price: faker.commerce.price(1000, 100000),  
      })
      .toString();
  
    fs.writeFile(`generated_script/${tableName}.sql`, content + ';' + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }