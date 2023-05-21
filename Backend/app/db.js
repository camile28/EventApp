const mysql = require("mysql2");

const mysqlConfigBase = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
};

const tasksManagerConnection = mysql.createConnection({
  ...mysqlConfigBase,
  database: "",
});

tasksManagerConnection.query(
  "CREATE DATABASE IF NOT EXISTS event_app",
  function (err) {
    if (err) throw err;
    console.log("Database event_app created");

    tasksManagerConnection.query("Use event_app", (err) => {
      if (err) throw err;

      const eventsTableQuery = `
      CREATE TABLE IF NOT EXISTS events (
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100),
        name VARCHAR(100),
        surname VARCHAR(100),
        email VARCHAR(100),
        phoneNumber VARCHAR(50),
        primary key (id)
      )`;

      tasksManagerConnection.query(eventsTableQuery, function (err) {
        if (err) throw err;
        console.log("Events Table created");
      });

      const usersQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100),
        email VARCHAR(100),
        password VARCHAR(100),
        primary key (id)
      )`;

      tasksManagerConnection.query(usersQuery, function (err) {
        if (err) throw err;
        console.log("Users Table created");
      });
    });
  }
);

const codeacademyConnection = mysql.createConnection({
  ...mysqlConfigBase,
  database: "codeacademy",
});

module.exports = {
  tasksManagerConnection,
  codeacademyConnection,
};
