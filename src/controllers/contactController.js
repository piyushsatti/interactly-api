const pool = require('../config/DatabaseConfig');
require('dotenv').config();
const key = process.env.CRUD_API_KEY
let sql;

const createContactController = async (req, res) => {
    const first_name = req.query.firstname
    const last_name = req.query.lastname
    const email = req.query.email
    const mobile_number = req.query.mobilenumber
    const data_store = req.query.datastore

    if (data_store == 'CRM') {
        res.sendStatus(501);
    }
    else if (data_store == 'DATABASE') {
        sql = `INSERT INTO contacts (first_name, last_name, email, mobile_number) VALUES('${first_name}', '${last_name}', '${email}', '${mobile_number}')`
        try {
            await pool.query(sql);
            res.sendStatus(200);
        } catch (err) {
            console.error(err.message);
        }
    }
    else {
        res.sendStatus(404)
    }
};

const getContactController = async (req, res) => {
    const contact_id = req.query.contactid
    const data_store = req.query.datastore

    if (data_store == 'CRM') {
        res.sendStatus(501);
    }
    else if (data_store == 'DATABASE') {
        sql = `SELECT * from contacts where contact_id = ${contact_id}`;
        try {
            const db_res = await pool.query(sql);
            res.json(db_res.rows[0]);
        } catch (err) {
            console.error(err.message);
        }
    }
    else {
        res.sendStatus(404)
    }
};

const updateContactController = async (req, res) => {
    const contact_id = req.query.contactid
    const email = req.query.email
    const mobile_number = req.query.mobilenumber
    const data_store = req.query.datastore

    if (data_store == 'CRM') {
        res.sendStatus(501);
    }
    else if (data_store == 'DATABASE') {
        sql = `update contacts set email='${email}', mobile_number='${mobile_number}' where contact_id = ${contact_id}`
        try {
            await pool.query(sql);
            res.sendStatus(200);
        } catch (err) {
            console.error(err.message);
        }
    }
    else {
        res.sendStatus(404)
    }
};

const deleteContactController = async (req, res) => {
    const contact_id = req.query.contactid
    const data_store = req.query.datastore

    if (data_store == 'CRM') {
        res.sendStatus(501);
    }
    else if (data_store == 'DATABASE') {
        sql = `DELETE FROM contacts where contact_id = ${contact_id}`
        try {
            await pool.query(sql);
            res.sendStatus(200);
        } catch (err) {
            console.error(err.message);
        }
    }
    else {
        res.sendStatus(404)
    }
};

module.exports = {  
    createContactController,
    getContactController,
    updateContactController,
    deleteContactController
};