const pembeli = require('./controller-pembeli');
const supplier = require('./controller-supplier');
const barang = require('./controller-barang');
const transaksi = require('./controller-transaksi');
const pembayaran = require('./controller-pembayaran');


module.exports = {
          pembeli,
          supplier,
          barang,
          transaksi,
          pembayaran
};