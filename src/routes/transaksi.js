const router = require('express').Router();
const { transaksi } = require('../controllers');

// GET localhost:8080/transaksi=> Ambil data semua transaksi
router.get('/', transaksi.getDatatransaksi);

// // POST localhost:8080/transaksi/add => Tambah data transaksike database
router.post('/add', transaksi.addDatatransaksi);

// // POST localhost:8080/transaksi/2 => Edit data transaksi
router.put('/edit/:id', transaksi.editDatatransaksi);

// // POST localhost:8080/transaksi/delete => Delete data transaksi
router.delete('/delete/:id', transaksi.deleteDatatransaksi);

module.exports = router;