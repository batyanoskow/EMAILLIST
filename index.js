require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const router = require('./router/index');
const https = require("https");
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true }));
app.use('/api', router);
const start = async () => {
    try {
        https.createServer(PORT , () => console.log("http started"))
    } catch (e) {
        console.log(e);
    }
}

start()
