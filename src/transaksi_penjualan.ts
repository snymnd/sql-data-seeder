import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import format from 'date-fns/format/index.js';
import * as fs from 'fs';

faker.locale = 'id_ID';

const tableName = 'transaksi_penjualan';

for (let i = 1; i <= 1000; i++) {
    console.log('🚀 ~ file: transaksi_penjualan.js ~ line 9 ~ i', i);
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
        t_penjualan_id: i,
        pg_id: faker.datatype.number({ min: 1, max: 100 }), 
        pl_id: faker.datatype.number({ min: 1, max: 100 }), 
        t_penjualan_waktu: format(faker.date.recent(1), "yyyy-MM-dd'T'HH:mm:ss"),
        total_harga_penjualan: faker.commerce.price(1000, 100000),
      })
      .toString();
  
    fs.writeFile(`generated_script/${tableName}.sql`, content + ';' + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }