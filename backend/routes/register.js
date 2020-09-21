const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/migrate.sql');

const reg = express();
reg.use(bodyParser.urlencoded({ extended: true }));


//db1.run('CREATE TABLE langs(name text)');

//db1.close();
reg.post('/', (req, res) => {
    console.log('Got body:', req.body['user']);
    res.sendStatus(200);
    db.run("INSERT INTO users (email, password) VALUES (?, ?)",
    "user@example.com",
    "superlonghashedpasswordthatwewillseehowtohashinthenextsection", (err) => {
    if (err) {
        return console.log(err.message);
    }

    // returnera korrekt svar
    console.log("db");
});
});


module.exports = reg;