const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const connectDB = async () => {
    try {
        console.log(`MONGO_URI: ${process.env.MONGO_URI}`.green.underline.bold);

        const conn = mongoose.connect(process.env.MONGO_URI);

        console.log(`MONGO_URI: ${process.env.MONGO_URI}`.green.underline.bold);
        console.log(
            `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;
