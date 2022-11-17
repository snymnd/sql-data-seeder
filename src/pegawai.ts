import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import * as fs from 'fs';

faker.locale = 'id_ID';

const tableName = 'employee';

let a = 0;
let flag;

for (let i = 1; i <= 100; i++) {
    console.log(i);
  
    if (i % 5 === 0) {
      a += 1;
      flag = false;
    } else {
      flag = true;
    }
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
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
      })
      .toString();
  
    fs.writeFile(`generated_script/${tableName}.sql`, content + ';' + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }