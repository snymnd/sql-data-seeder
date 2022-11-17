import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import * as fs from 'fs';
import format from 'date-fns/format/index.js';

faker.locale = 'id_ID';

const tableName = 'customer';

for (let i = 1; i <= 100; i++) {
    console.log('🚀 ~ file: customer.ts ~ line 9 ~ i', i);
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
        cust_id: i,
        cust_name: faker.name.fullName(),
        cust_phone_num: faker.phone.number('+628#########'),
        cust_email: faker.internet.email(),
        cust_registration_date: format(faker.date.past(1), 'yyyy-MM-dd'),
        cust_address: faker.address.streetAddress(),
      })
      .toString();
  
    fs.writeFile(`generated_script/${tableName}.sql`, content + ';' + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }