import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import * as fs from 'fs';

faker.locale = 'id_ID';

const tableName = 'supplier';

for (let i = 1; i <= 100; i++) {
    console.log('🚀 ~ file: supplier.ts ~ line 9 ~ i', i);
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
        sp_id: i,
        sp_nama: faker.name.fullName(),
        sp_no_telp: faker.phone.number('+628#########'),
        sp_alamat: faker.address.streetAddress(),
      })
      .toString();
  
    fs.writeFile(`generated_script/${tableName}.sql`, content + ';' + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }