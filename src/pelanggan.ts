import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import * as fs from 'fs';
import format from 'date-fns/format/index.js';

faker.locale = 'id_ID';

const tableName = 'pelanggan';

for (let i = 1; i <= 100; i++) {
    console.log('🚀 ~ file: pelanggan.ts ~ line 9 ~ i', i);
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
        pl_id: i,
        pl_nama: faker.name.fullName(),
        pl_no_telp: faker.phone.number('+628#########'),
        pl_email: faker.internet.email(),
        pl_tgl_daftar: format(faker.date.past(1), 'yyyy-MM-dd'),
        pl_alamat: faker.address.streetAddress(),
      })
      .toString();
  
    fs.writeFile(`generated_script/${tableName}.txt`, content + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }