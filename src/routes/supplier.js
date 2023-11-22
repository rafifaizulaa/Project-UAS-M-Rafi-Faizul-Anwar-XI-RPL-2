const router = require('express').Router();
const { supplier } = require('../controllers');

// GET localhost:8080/supplier=> Ambil data semua supplier
router.get('/', supplier.getDatasupplier);

// // POST localhost:8080/supplier/add => Tambah data supplierke database
router.post('/add', supplier.addDatasupplier);

// // POST localhost:8080/supplier/2 => Edit data supplier
router.put('/edit/:id', supplier.editDatasupplier);

// // POST localhost:8080/supplier/delete => Delete data supplier
router.delete('/delete/:id', supplier.deleteDatasupplier);

module.exports = router;