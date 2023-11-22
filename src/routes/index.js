const router = require('express').Router();
const routePembeli = require('./pembeli');
const routeSupplier = require('./supplier');
const routeBarang = require('./barang');
const routeTransaksi = require('./transaksi');
const routePembayaran = require('./pembayaran');


// GET localhost:8080/pembeli => Ambil data semua pembeli
router.use('/pembeli', routePembeli);
router.use('/supplier', routeSupplier);
router.use('/barang', routeBarang);
router.use('/transaksi', routeTransaksi);
router.use('/pembayaran', routePembayaran);


module.exports = router;