"use strict";

const process = require("process");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    operatorsAliases: false
  }
);

module.exports.hello = (event, context, callback) => {

  context.callbackWaitsForEmptyEventLoop = false;

  sequelize.authenticate()
    .then(() => {

      callback(null, { statusCode: 200, body: "Database connection successful" });
    })
    .catch(() => {

      callback(null, { statusCode: 400, body: "Database connection failed" });
    });
};

