CREATE TABLE IF NOT EXISTS Pegawai (
	pg_id char(4) NOT NULL PRIMARY KEY,
    pg_nama varchar(50) NOT NULL,
    pg_nik char(16) NOT NULL,
    pg_alamat varchar(200) NOT NULL,
    pg_no_telp varchar(15) NOT NULL,
    pg_bagian varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS transaksi_pembelian (
	t_pembelian_id char(4) NOT NULL PRIMARY KEY,
    t_pembelian_waktu datetime NOT NULL,
    total_harga_pembelian float NOT NULL
);

CREATE TABLE IF NOT EXISTS supplier (
	id_supplier char(4) NOT NULL PRIMARY KEY,
    nama_supplier char(50) NOT NULL,
    no_telp_supplier varchar(15) NOT NULL,
    alamat_supplier varchar(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS transaksi_penjualan (
	id_t_penjualan char(4) NOT NULL PRIMARY KEY,
    waktu_t_penjualan datetime NOT NULL,
    total_harga_penjualan float NOT NULL
);

CREATE TABLE IF NOT EXISTS barang (
	id_barang char(4) NOT NULL PRIMARY KEY,
    nama_barang varchar(50) NOT NULL,
    harga_jual_barang float NOT NULL,
    harga_beli_barang float NOT NULL,
    berat_barang varchar(20) NOT NULL,
    jumlah_stok int NOT NULL,
    diskon int NOT NULL
);

CREATE TABLE IF NOT EXISTS pelanggan (
	id_pelanggan char(4) NOT NULL PRIMARY KEY,
    nama_pelanggan varchar(50) NOT NULL,
    no_telp_pelanggan varchar(15) NOT NULL,
    email_pelanggan varchar(50) NOT NULL,
    tgl_daftar_pelanggan date NOT NULL,
    alamat_pelanggan varchar(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS jenis_barang (
	id_jenis_barang char(4) NOT NULL PRIMARY KEY,
    nama_jenis varchar(50) NOT NULL
);

ALTER TABLE transaksi_pembelian
ADD pg_id char(4),
ADD sp_id char(4),
ADD FOREIGN KEY (pg_id) REFERENCES pegawai(pg_id),
ADD FOREIGN KEY (sp_id) REFERENCES supplier(sp_id);

ALTER TABLE transaksi_penjualan
ADD id_pelanggan char(4),
ADD id_pegawai char(4),
ADD FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id_pelanggan),
ADD FOREIGN KEY (id_pegawai) REFERENCES pegawai(id_pegawai);

ALTER TABLE barang
ADD id_jenis_barang char(4),
ADD FOREIGN KEY (id_jenis_barang) REFERENCES jenis_barang(id_jenis_barang);