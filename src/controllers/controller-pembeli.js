const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDatapembeli = async(req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query('SELECT * FROM pembeli', function(error, rows) {
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
const addDatapembeli = async(req, res) => {
    let data = {
        nama_pembeli: req.body.nama_pembeli,
        jk: req.body.jk,
        no_telp: req.body.no_telp,
        alamat: req.body.alamat
    }
    const result = await new Promise((resolve, reject) => {
        connection.query('INSERT INTO pembeli SET ?;', [data], function(error, rows) {
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
const editDatapembeli = async(req, res) => {
    let id = req.params.id;
    let dataEdit = {
        nama_pembeli: req.body.nama_pembeli,
        jk: req.body.jk,
        no_telp: req.body.no_telp,
        alamat: req.body.alamat
    }

    const result = await new Promise((resolve, reject) => {
        connection.query('UPDATE pembeli SET ? WHERE id = ?;', [dataEdit, id], function(error, rows) {
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
const deleteDatapembeli = async(req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        connection.query('DELETE FROM pembeli WHERE id = ?;', [id], function(error, rows) {
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
    getDatapembeli,
    addDatapembeli,
    editDatapembeli,
    deleteDatapembeli
}