const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB)
        console.log('Successfully connected to DB');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connection;