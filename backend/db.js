const { open } = require('sqlite')
const sqlite3 = require("sqlite3");
const path = require('path');

let db = null;
const dbPath = path.join(__dirname, 'test.db')

const dbConnection = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        })
        console.log('db connected')
        await db.run(`CREATE TABLE IF NOT EXISTS users (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT,
                        email TEXT UNIQUE,
                        password TEXT
                 )`)
        return db;

    } catch (e) {
        console.log(`Db error : ${e.message}`)
        process.exit(1)
    }
}

module.exports = dbConnection




