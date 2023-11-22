const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDatapembayaran = async(req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query('SELECT * FROM pembayaran', function(error, rows) {
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
const addDatapembayaran = async(req, res) => {
    let data = {
        tgl_bayar: req.body.tgl_bayar,
        total_bayar: req.body.total_bayar,
        id_transaksi: req.body.id_transaksi
    }
    const result = await new Promise((resolve, reject) => {
        connection.query('INSERT INTO pembayaran SET ?;', [data], function(error, rows) {
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
const editDatapembayaran = async(req, res) => {
    let id = req.params.id;
    let dataEdit = {
        tgl_bayar: req.bod_bayar,
        total_bayar: req.body.total_bayar,
        id_transaksi: req.body.id_transaksi
    }

    const result = await new Promise((resolve, reject) => {
        connection.query('UPDATE pembayaran SET ? WHERE id = ?;', [dataEdit, id], function(error, rows) {
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
const deleteDatapembayaran = async(req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        connection.query('DELETE FROM pembayaran WHERE id = ?;', [id], function(error, rows) {
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
    getDatapembayaran,
    addDatapembayaran,
    editDatapembayaran,
    deleteDatapembayaran
}