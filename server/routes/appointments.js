const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { name, email, phone, service, date, time, message } = req.body;

  if (!name || !email || !phone || !service || !date || !time) {
    return res.status(400).json({ error: 'All required fields must be filled.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO appointments (name, email, phone, service, date, time, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [name, email, phone, service, date, time, message || '']
    );
    res.status(201).json({ success: true, message: 'Appointment booked successfully!', appointment: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save appointment.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM appointments ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch appointments.' });
  }
});

module.exports = router;
