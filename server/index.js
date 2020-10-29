const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./routes/userRoute");
const appRoute = require("./routes/app");

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

// Routes
app.use("/api", appRoute);
app.use("/api/author", userRoute);

// 404 error  page
app.get("/*", (req, res) => {
  res.status(404).send("something went wrong");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
