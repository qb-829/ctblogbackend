import mysql from "mysql2"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"HerN@me1!",
    database:"blog"
})