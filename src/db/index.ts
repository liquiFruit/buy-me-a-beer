import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3"
import Database from "better-sqlite3"

export const db: BetterSQLite3Database = drizzle(new Database("./src/db/beer.db"))


export * from "./schema"