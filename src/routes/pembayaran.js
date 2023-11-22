const router = require('express').Router();
const { pembayaran } = require('../controllers');

// GET localhost:8080/pembayaran=> Ambil data semua pembayaran
router.get('/', pembayaran.getDatapembayaran);

// // POST localhost:8080/pembayaran/add => Tambah data pembayaranke database
router.post('/add', pembayaran.addDatapembayaran);

// // POST localhost:8080/pembayaran/2 => Edit data pembayaran
router.put('/edit/:id', pembayaran.editDatapembayaran);

// // POST localhost:8080/pembayaran/delete => Delete data pembayaran
router.delete('/delete/:id', pembayaran.deleteDatapembayaran);

module.exports = router;