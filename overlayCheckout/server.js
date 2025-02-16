require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend access

// Serve a config.js file dynamically
app.get("/config.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.send(`const PADDLE_CLIENT_TOKEN = "${process.env.PADDLE_CLIENT_TOKEN}";`);
});

// Handle root URL ("/") to prevent 404 errors
app.get("/", (req, res) => {
  res.send(
    "✅ Server is running! Try accessing <a href='/config.js'>/config.js</a>."
  );
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
