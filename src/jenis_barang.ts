import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import * as fs from 'fs';
import format from 'date-fns/format/index.js';

faker.locale = 'id_ID';

const tableName = 'item_category';

for (let i = 1; i <= 4; i++) {
    console.log('🚀 ~ file: item_category.ts ~ line 9 ~ i', i);
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
        ic_id: i,
        ic_name: faker.helpers.arrayElement([ 
          'Alat Menulis',
          'Alat Menghapus',
          'Peralatan Pendukung',
          'Peralatan Kantor',
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