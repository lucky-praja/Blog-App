const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/blogDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/auth", userRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Blog REST API is Running...");
});

// Start Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});