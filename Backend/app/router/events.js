const express = require("express");
const { tasksManagerConnection } = require("../db");
const { defaultCallback } = require("../utils/dbUtils");

const router = express.Router();

router.get("/events", (req, res) => {
  tasksManagerConnection.execute("SELECT * FROM events", (err, result) =>
    defaultCallback(err, result, res)
  );
});

router.get("/events/:eventId", (req, res) => {
  const { eventId } = req.params;

  tasksManagerConnection.execute(
    "SELECT * FROM events WHERE eventId=?",
    [eventId],
    (err, result) => defaultCallback(err, result, res)
  );
});

router.delete("/events/:eventId", (req, res) => {
  const { eventId } = req.params;

  tasksManagerConnection.execute(
    "DELETE FROM events WHERE id=?",
    [eventId],
    (err, result) => defaultCallback(err, result, res)
  );
});

router.post("/events", (req, res) => {
  const { title, name, surname, email, phoneNumber } = req.body;

  tasksManagerConnection.execute(
    `INSERT INTO events (title, name, surname, email, phoneNumber)
        VALUES (?, ?, ?, ?, ?)
        `,
    [title, name, surname, email, phoneNumber],
    (err, result) => defaultCallback(err, result, res)
  );
});

module.exports = router;
