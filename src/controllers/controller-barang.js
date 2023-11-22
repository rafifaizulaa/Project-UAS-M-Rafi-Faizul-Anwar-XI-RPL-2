const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDatabarang = async(req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query('SELECT * FROM barang', function(error, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (data) {
        res.send({
            success: true,
            message: 'Berhasil ambil data!',
            data: data
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal ambil data!',
        });
    }
}

// manambahkan data
const addDatabarang = async(req, res) => {
    let data = {
        nama_barang: req.body.nama_barang,
        harga: req.body.harga,
        stok: req.body.stok,
        id_supplier: req.body.id_supplier
    }
    const result = await new Promise((resolve, reject) => {
        connection.query('INSERT INTO barang SET ?;', [data], function(error, rows) {
            if (rows) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: 'Berhasil x data!'
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal menambahkan data!',
        });
    }
}

//mengubah data
const editDatabarang = async(req, res) => {
    let id = req.params.id;
    let dataEdit = {
        nama_barang: req.body.nama_barang,
        harga: req.body.harga,
        stok: req.body.stok,
        id_supplier: req.body.id_supplier
    }

    const result = await new Promise((resolve, reject) => {
        connection.query('UPDATE barang SET ? WHERE id = ?;', [dataEdit, id], function(error, rows) {
            if (rows) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: 'Berhasil edit data!'
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal edit data'
        });
    }
}

//menghapus data
const deleteDatabarang = async(req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        connection.query('DELETE FROM barang WHERE id = ?;', [id], function(error, rows) {
            if (rows) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: 'Berhasil hapus data!'
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal menghapus data!'
        });
    }
}

module.exports = {
    getDatabarang,
    addDatabarang,
    editDatabarang,
    deleteDatabarang
}