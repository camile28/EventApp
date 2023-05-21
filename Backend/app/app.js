require("dotenv").config();
const express = require("express");
const cors = require("cors");

const usersRouter = require("./router/users");
const authenticationRouter = require("./router/authentication");
const eventsRouter = require("./router/events");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(authenticationRouter);
app.use(eventsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
