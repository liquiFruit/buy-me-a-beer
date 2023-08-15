const { drizzle } = require("drizzle-orm/better-sqlite3")
const BetterSQLite3Database = require("better-sqlite3")
const { migrate } = require("drizzle-orm/better-sqlite3/migrator")
const dotenv = require("dotenv").config()

const db = drizzle(new BetterSQLite3Database(process.env.DB_URL))
migrate(db, { migrationsFolder: "./src/db/drizzle/" })

console.log("Migrated successfully")