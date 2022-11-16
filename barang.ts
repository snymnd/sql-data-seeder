import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import * as fs from 'fs';

faker.locale = 'id_ID';

const tableName = 'barang';

for (let i = 1; i <= 1000; i++) {
    console.log('🚀 ~ file: barang.ts ~ line 9 ~ i', i);
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
        brg_id: i,
        brg_nama: faker.commerce.product() ,
        brg_harga_jual: faker.commerce.price(),
        brg_harga_beli: faker.commerce.price(),
        brg_berat: faker.random.numeric(),
        jumlah_stok: faker.random.numeric(),
        diskon: faker.random.numeric(),
      })
      .toString();
  
    fs.writeFile(`generated_script/${tableName}.txt`, content + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }