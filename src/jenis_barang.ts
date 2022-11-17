import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import * as fs from 'fs';
import format from 'date-fns/format/index.js';

faker.locale = 'id_ID';

const tableName = 'jenis_barang';

for (let i = 1; i <= 4; i++) {
    console.log('🚀 ~ file: jenis_barang.ts ~ line 9 ~ i', i);
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
        jb_id: i,
        jb_nama: faker.helpers.arrayElement([ 
          'Alat Menulis',
          'Alat Menghapus',
          'Peralatan Pendukung',
          'Peralatan Kantor',
        ]),
      })
      .toString();
  
    fs.writeFile(`generated_script/${tableName}.txt`, content + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }