import format from 'date-fns/format'
import faker from 'faker/locale/id_ID'

faker.locale = 'id_ID';

const i = 0;

const pegawai = {
    pg_id: i,
    pg_nama: faker.name.findName(),
    pg_nik: faker.phone.phoneNumber('################'),
    pg_alamat: faker.address.streetAddress(),
    pg_no_telp: faker.phone.phoneNumber('+628#########'),
    pg_password: faker.internet.password(),
    pg_bagian: faker.random.arrayElement([
        'BAGIAN 1',
        'BAGIAN 2',
        'BAGIAN 3',
      ]),
}
