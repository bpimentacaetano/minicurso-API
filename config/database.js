'use strict'

const {Pool} = require('pg');

var db_username = process.env.DB_USERNAME || "postgres";
var db_password = process.env.DB_PASSWORD || "postgres";
var db_host = process.env.DB_HOST || "localhost";
var db_port = process.env.DB_PORT || "5432";
var db_database = process.env.DB_DATABASE || "database";

var connection = "postgres://"+db_username+":"+db_password+"@"+db_host+":"+db_port+"/"+db_database;
// module.exports = connection;

const pool = new Pool({
    connectionString : connection
});
  
  pool.on('connect', () =>{
    console.log("Base conectada com sucesso");
  });

  module.exports = {
    query: (text, params) => pool.query(text, params),
  };