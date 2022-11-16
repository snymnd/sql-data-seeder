import format from 'date-fns/format/index.js';
import { faker } from '@faker-js/faker/locale/id_ID'

faker.locale = 'id_ID';

const i = 0;

const pegawai = {
    pg_id: i,
    pg_nama: faker.name.fullName(),
    pg_nik: faker.phone.number('################'),
    pg_alamat: faker.address.streetAddress(),
    pg_no_telp: faker.phone.number('+628#########'),
    pg_password: faker.internet.password(),
    pg_bagian: faker.helpers.arrayElement([ //specify content
        'BAGIAN 1',
        'BAGIAN 2',
        'BAGIAN 3',
      ]),
}

const transaksi_pembelian = {
  t_pembelian_id: i,
  pg_id: i, //need random number
  sp_id: i, //need random number
  t_pembelian_waktu: format(faker.date.past(1), 'yyyy-MM-dd'), //need time?
  t_pembelian_total_harga: faker.commerce.price(), //apply rules?
}

const supplier = {
  sp_id: i,
  sp_nama: faker.name.fullName(),
  sp_no_telp: faker.phone.number('+628#########'),
  sp_alamat: faker.address.streetAddress(),
}

const transaksi_penjualan = {
  t_penjualan_id: i,
  pg_id: i, //need random number
  pl_id: i, //need random number
  t_penjualan_waktu: format(faker.date.past(1), 'yyyy-MM-dd'), //need time?
  t_penjualan_total_harga: faker.commerce.price(), //apply rules?
}

const barang = {
  brg_id: i,
  jb_id: i, //need random number
  brg_nama: faker.commerce.product() , //array of element instead?
  brg_harga_jual: faker.commerce.price(), //need rules to harga beli <
  brg_harga_beli: faker.commerce.price(), //need rules to harga jual >
  brg_berat: faker.random.numeric(), //specify
  jumlah_stok: faker.random.numeric(),
  diskon: faker.random.numeric(), //percentage?
}

const pelanggan = { // change to pl
  pg_id: i,
  pg_nama: faker.name.fullName(),
  pg_no_telp: faker.phone.number('+628#########'),
  pg_email: faker.internet.email(),
  pg_tgl_daftar: format(faker.date.past(1), 'yyyy-MM-dd'), //need time?
  pg_alamat: faker.address.streetAddress(),
}

const jenis_barang = {
  jb_id: i,
  jb_nama: faker.helpers.arrayElement([ //specify content
    'JENIS 1',
    'JENIS 2',
    'JENIS 3',
  ]),
}