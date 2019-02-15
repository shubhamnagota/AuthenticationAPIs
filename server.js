// Import modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const configData = require("./config/config.json");
const apiRouter = require("./routes/user");
const errorHandler = require("./config/error_handler");

// App configuration
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'))

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

// API routes
app.use("/api", apiRouter);

// Global error handler
app.use(errorHandler);

// Start the server
const port = process.env.PORT ? process.env.PORT || configData.PORT : 4000;
app.listen(port, function() {
  console.log(`App started listening on port : ${port}`);
});
