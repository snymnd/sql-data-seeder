import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import format from 'date-fns/format/index.js';
import * as fs from 'fs';

faker.locale = 'id_ID';

const tableName = 'transaksi_pembelian';

for (let i = 1; i <= 1000; i++) {
    console.log('🚀 ~ file: transaksi_pembelian.ts ~ line 9 ~ i', i);
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
        t_pembelian_id: i,
        pg_id: faker.datatype.number(100), 
        sp_id: faker.datatype.number(100), 
        t_pembelian_waktu: format(faker.date.past(1), "yyyy-MM-dd'T'HH:mm:ss"),
        total_harga_pembelian: faker.commerce.price(1000, 100000), 
      })
      .toString();
  
    fs.writeFile(`generated_script/${tableName}.txt`, content + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }