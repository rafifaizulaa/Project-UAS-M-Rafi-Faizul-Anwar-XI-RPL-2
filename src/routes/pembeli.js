const router = require('express').Router();
const { pembeli } = require('../controllers');

// GET localhost:8080/pembeli=> Ambil data semua pembeli
router.get('/', pembeli.getDatapembeli);

// // POST localhost:8080/pembeli/add => Tambah data pembelike database
router.post('/add', pembeli.addDatapembeli);

// // POST localhost:8080/pembeli/2 => Edit data pembeli
router.put('/edit/:id', pembeli.editDatapembeli);

// // POST localhost:8080/pembeli/delete => Delete data pembeli
router.delete('/delete/:id', pembeli.deleteDatapembeli);

module.exports = router;