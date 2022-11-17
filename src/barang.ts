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
        jb_id: faker.datatype.number({ min: 1, max: 4 }), 
        brg_nama: faker.commerce.productName() , 
        brg_harga_jual: faker.commerce.price(), 
        brg_harga_beli: faker.commerce.price(), 
        brg_berat: faker.datatype.number(10), 
        jumlah_stok: faker.datatype.number(1000),
        diskon: faker.datatype.number({ max: 100 }), 
      })
      .toString();
  
    fs.writeFile(`generated_script/${tableName}.sql`, content + ';' + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }