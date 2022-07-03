const path = require("path");
const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const colors = require("colors");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));

// Serve frontend
console.log(`In server.js ${process.env.NODE_ENV} =+=+=+=`.red.underline.bold);
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../", "frontend", "", "index.html")
        );
    });
} else {
    app.get("/", (req, res) => res.send("App not set to production"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
