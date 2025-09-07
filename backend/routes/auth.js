const express = require('express');
const bcrypt = require('bcrypt');
const dbConnection = require('../db.js');

const router = express.Router()

router.get('/test', async (req, res) => {
    const db = await dbConnection()
    const user = await db.all(`select * from testData`)
    res.send(user)

})

//register user 
router.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        // console.log(name);
        if (!email || !password) return res.status(400).json({ error: "Username and Password required" })
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds)
        // console.log(hashPassword);
        const db = await dbConnection();
        // console.log("db done");
        const data = await db.run("INSERT INTO users(email, password, name) VALUES (?, ?, ?)", [email, hashPassword, name])
        // console.log(data);
        res.json({ message: "User registerd successfull" })

    } catch (err) {
        if (err.message.includes("UNIQUE")) {
            return res.status(400).json({ error: "User already exists" });
        }
        res.status(500).json({ error: err.message });

    }

})


//login

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const db = await dbConnection();
        const user = await db.get("SELECT * FROM users WHERE email=?", [email]);
        if (!user) return res.status(400).json({ error: "Invalid email" });
        const match = bcrypt.compare(password, user.password)
        if (!match) res.status(401).json({ error: "Invalid password" });
        req.session.user = { id: user.id, email: user.email, name: user.name };
        res.status(200).json({ message: "Login successful", user: req.session.user });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

})
//check session
router.get("/me", (req, res) => {
    if (req.session.user) {
        console.log(req.session.user)
        res.json({ loggedIn: true, user: req.session.user });
    }
    else res.json({ loggedIn: false });
});

// Logout
router.post("/logout", (req, res) => {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
});



module.exports = router