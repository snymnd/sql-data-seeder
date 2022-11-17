import squel from 'squel';
import { faker } from '@faker-js/faker/locale/id_ID'
import * as fs from 'fs';

faker.locale = 'id_ID';

const tableName = 'pegawai';

let a = 0;
let flag;

for (let i = 1; i <= 100; i++) {
    console.log(i);
  
    if (i % 5 === 0) {
      a += 1;
      flag = false;
    } else {
      flag = true;
    }
  
    const content = squel
      .insert()
      .into(tableName)
      .setFields({
        pg_id: i,
        pg_nama: faker.name.fullName(),
        pg_nik: faker.phone.number('################'),
        pg_alamat: faker.address.streetAddress(),
        pg_no_telp: faker.phone.number('+628#########'),
        pg_bagian: faker.helpers.arrayElement([ 
            'Magang',
            'Karyawan Junior',
            'Karyawan Senior',
            'Manager',
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