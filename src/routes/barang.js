const router = require('express').Router();
const { barang } = require('../controllers');

// GET localhost:8080/barang=> Ambil data semua barang
router.get('/', barang.getDatabarang);

// // POST localhost:8080/barang/add => Tambah data barangke database
router.post('/add', barang.addDatabarang);

// // POST localhost:8080/barang/2 => Edit data barang
router.put('/edit/:id', barang.editDatabarang);

// // POST localhost:8080/barang/delete => Delete data barang
router.delete('/delete/:id', barang.deleteDatabarang);

module.exports = router;