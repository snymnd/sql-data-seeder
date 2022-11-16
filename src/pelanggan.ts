import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import * as fs from 'fs';
import format from 'date-fns/format/index.js';

faker.locale = 'id_ID';

const tableName = 'pelanggan';

for (let i = 1; i <= 1000; i++) {
    console.log('🚀 ~ file: pelanggan.ts ~ line 9 ~ i', i);
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
        pg_id: i,
        pg_nama: faker.name.fullName(),
        pg_no_telp: faker.phone.number('+628#########'),
        pg_email: faker.internet.email(),
        pg_tgl_daftar: format(faker.date.past(1), 'yyyy-MM-dd'),
        pg_alamat: faker.address.streetAddress(),
      })
      .toString();
  
    fs.writeFile(`generated_script/${tableName}.txt`, content + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }