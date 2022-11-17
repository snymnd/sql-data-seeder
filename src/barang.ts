import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import * as fs from 'fs';

faker.locale = 'id_ID';

const tableName = 'item';

for (let i = 1; i <= 1000; i++) {
    console.log('🚀 ~ file: item.ts ~ line 9 ~ i', i);
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
        item_id: i,
        ic_id: faker.datatype.number({ min: 1, max: 4 }), 
        item_name: faker.commerce.productName() , 
        item_sale_price: faker.commerce.price(), 
        item_purchase_price: faker.commerce.price(), 
        item_weight: faker.datatype.number(10), 
        item_stock: faker.datatype.number(1000),
        discount: faker.datatype.number({ max: 100 }), 
      })
      .toString();
  
    fs.writeFile(`generated_script/${tableName}.sql`, content + ';' + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }