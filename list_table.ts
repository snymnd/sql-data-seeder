import format from 'date-fns/format/index.js';
import { faker } from '@faker-js/faker/locale/id_ID'

faker.locale = 'id_ID';

const i = 0;

const pegawai = {
    pg_id: i,
    pg_nama: faker.name.findName(),
    pg_nik: faker.phone.phoneNumber('################'),
    pg_alamat: faker.address.streetAddress(),
    pg_no_telp: faker.phone.phoneNumber('+628#########'),
    pg_password: faker.internet.password(),
    pg_bagian: faker.helpers.arrayElement([
        'BAGIAN 1',
        'BAGIAN 2',
        'BAGIAN 3',
      ]),
}

const transaksi_pembelian = {
  t_pembelian_id: i,
  t_pembelian_waktu: format(faker.date.past(1), 'yyyy-MM-dd'),
  t_pembelian_total_harga: faker.commerce.price(),
}

const supplier = {
  sp_id: i,
  sp_nama: faker.name.fullName(),
  sp_no_telp: faker.phone.phoneNumber('+628#########'),
  sp_alamat: faker.address.streetAddress(),
}

const transaksi_penjualan = {
  t_penjualan_id: i,
  t_penjualan_waktu: format(faker.date.past(1), 'yyyy-MM-dd'),
  t_penjualan_total_harga: faker.commerce.price(),
}

const barang = {
  brg_id: i,
  brg_nama: faker.commerce.product() ,
  brg_harga_jual: faker.commerce.price(),
  brg_harga_beli: faker.commerce.price(),
  brg_berat: faker.random.numeric(),
  jumlah_stok: faker.random.numeric(),
  diskon: faker.random.numeric(),
}

const pelanggan = {
  pg_id: i,
  pg_nama: faker.name.findName(),
  pg_no_telp: faker.phone.phoneNumber('+628#########'),
  pg_email: faker.internet.email(),
  pg_tgl_daftar: format(faker.date.past(1), 'yyyy-MM-dd'),
  pg_alamat: faker.address.streetAddress(),
}

const jenis_barang = {
  jb_id: i,
  jb_nama: faker.helpers.arrayElement([
    'JENIS 1',
    'JENIS 2',
    'JENIS 3',
  ]),
}