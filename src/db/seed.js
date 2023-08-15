const BetterSQLite3Database = require("better-sqlite3")
const dotenv = require("dotenv").config()

const db = new BetterSQLite3Database(process.env.DB_URL)
db.exec(`INSERT INTO beers (name, price)
VALUES
    ('Heineken', 3500),
  ('Black Label', 2500),
  ('Tafel', 3000);
`)

console.log("Seeded successfully.")