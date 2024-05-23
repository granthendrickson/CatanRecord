const express = require('express');
const app = express();
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
});

app.get('/', (req, res) => {});

app.listen(3001, () => {
	console.log('running on port 3001');
});
