const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDatasupplier = async(req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query('SELECT * FROM supplier', function(error, rows) {
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
const addDatasupplier = async(req, res) => {
    let data = {
        nama_supplier: req.body.nama_supplier,
        no_telp: req.body.no_telp,
        alamat: req.body.alamat
    }
    const result = await new Promise((resolve, reject) => {
        connection.query('INSERT INTO supplier SET ?;', [data], function(error, rows) {
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
const editDatasupplier = async(req, res) => {
    let id = req.params.id;
    let dataEdit = {
        nama_supplier: req.body.nama_supplier,
        no_telp: req.body.no_telp,
        alamat: req.body.alamat
    }

    const result = await new Promise((resolve, reject) => {
        connection.query('UPDATE supplier SET ? WHERE id = ?;', [dataEdit, id], function(error, rows) {
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
const deleteDatasupplier = async(req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        connection.query('DELETE FROM supplier WHERE id = ?;', [id], function(error, rows) {
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
    getDatasupplier,
    addDatasupplier,
    editDatasupplier,
    deleteDatasupplier
}