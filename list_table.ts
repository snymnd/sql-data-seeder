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
    pg_bagian: faker.helpers.arrayElement([ 
        'Magang',
        'Karyawan Junior',
        'Karyawan Senior',
        'Manager',
      ]),
}

const transaksi_pembelian = {
  t_pembelian_id: i,
  pg_id: faker.datatype.number({ min: 1, max: 100 }), 
  sp_id: faker.datatype.number({ min: 1, max: 100 }), 
  t_pembelian_waktu: format(faker.date.past(1), "yyyy-MM-dd'T'HH:mm:ss"),
  total_harga_pembelian: faker.commerce.price(1000, 100000), 
}

const supplier = {
  sp_id: i,
  sp_nama: faker.name.fullName(),
  sp_no_telp: faker.phone.number('+628#########'),
  sp_alamat: faker.address.streetAddress(),
}

const transaksi_penjualan = {
  t_penjualan_id: i,
  pg_id: faker.datatype.number({ min: 1, max: 100 }), 
  pl_id: faker.datatype.number({ min: 1, max: 100 }), 
  t_penjualan_waktu: format(faker.date.recent(1), "yyyy-MM-dd'T'HH:mm:ss"),
  total_harga_penjualan: faker.commerce.price(1000, 100000),
}

const barang = {
  brg_id: i,
  jb_id: faker.datatype.number({ min: 1, max: 4 }), 
  brg_nama: faker.commerce.product() , //array of element instead?
  brg_harga_jual: faker.commerce.price(), //need rules to harga beli <
  brg_harga_beli: faker.commerce.price(), //need rules to harga jual >
  brg_berat: faker.datatype.number(10), 
  jumlah_stok: faker.datatype.number(1000),
  diskon: faker.datatype.number({ max: 100 }), 
}

const pelanggan = { 
  pl_id: i,
  pl_nama: faker.name.fullName(),
  pl_no_telp: faker.phone.number('+628#########'),
  pl_email: faker.internet.email(),
  pl_tgl_daftar: format(faker.date.past(1), 'yyyy-MM-dd'),
  pl_alamat: faker.address.streetAddress(),
}

const jenis_barang = {
  jb_id: i,
  jb_nama: faker.helpers.arrayElement([ 
    'Alat Menulis',
    'Alat Menghapus',
    'Peralatan Pendukung',
    'Peralatan Kantor',
  ]),
}