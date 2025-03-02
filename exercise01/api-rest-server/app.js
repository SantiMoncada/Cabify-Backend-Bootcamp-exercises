require("dotenv/config");

const express = require("express");

const app = express();

require("./config")(app);

const allRoutes = require("./routes/index.routes");

app.use("/", allRoutes);

require("./error-handling")(app);

module.exports = app;
