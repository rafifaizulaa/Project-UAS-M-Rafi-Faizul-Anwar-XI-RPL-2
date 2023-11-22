const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDatatransaksi = async(req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query('SELECT * FROM transaksi', function(error, rows) {
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
const addDatatransaksi = async(req, res) => {
    let data = {
        id_barang: req.body.id_barang,
        id_pembeli: req.body.id_pembelia,
        tanggal: req.body.tanggal,
        keterangan: req.body.keterangan
    }
    const result = await new Promise((resolve, reject) => {
        connection.query('INSERT INTO transaksi SET ?;', [data], function(error, rows) {
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
const editDatatransaksi = async(req, res) => {
    let id = req.params.id;
    let dataEdit = {
        id_barang: req.body.id_barang,
        id_pembeli: req.body.id_pembeli,
        tanggal: req.body.tanggal,
        keterangan: req.body.keterangan
    }

    const result = await new Promise((resolve, reject) => {
        connection.query('UPDATE transaksi SET ? WHERE id = ?;', [dataEdit, id], function(error, rows) {
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
const deleteDatatransaksi = async(req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        connection.query('DELETE FROM transaksi WHERE id = ?;', [id], function(error, rows) {
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
    getDatatransaksi,
    addDatatransaksi,
    editDatatransaksi,
    deleteDatatransaksi
}