const express = require('express');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret123",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 },
  })
);



app.use('/api', authRoutes)


app.listen(4000, () => {
    console.log("server running on http://localhost:4000")
})