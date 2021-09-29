require('dotenv').config();
const express = require('express');
const server = express();
require('./connection')()
const cors = require('cors')
const postsRoutes = require('./routes/posts.js')

server.use(cors())
server.use(express.json({ limit: "5mb", extended: true }));
server.use(express.urlencoded({ limit: "5mb", extended: true }));
server.use('/api/posts', postsRoutes)



server.listen(process.env.PORT || "5000", () => {
    console.log('server is running');
})